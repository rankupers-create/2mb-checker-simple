from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import requests
import gzip
import re
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# URL Analysis Models
class UrlAnalyzeRequest(BaseModel):
    url: str

class ResourceDetail(BaseModel):
    type: str
    count: int
    totalSize: int

class UrlAnalyzeResponse(BaseModel):
    url: str
    status: str  # "pass", "warning", "fail"
    htmlSize: int
    htmlSizeCompressed: int
    totalResources: int
    resourcesDetails: List[ResourceDetail]
    loadTime: float
    truncatedContent: bool
    truncatedAt: Optional[int] = None
    crawlabilityScore: int
    timestamp: str
    error: Optional[str] = None

# Constants
GOOGLEBOT_LIMIT = 2097152  # 2MB in bytes
WARNING_THRESHOLD = 0.8  # 80% of limit

def analyze_html_resources(html_content: str, base_url: str) -> dict:
    """Parse HTML and count external resources"""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    resources = {
        'JavaScript': {'count': 0, 'totalSize': 0},
        'CSS': {'count': 0, 'totalSize': 0},
        'Images': {'count': 0, 'totalSize': 0},
        'Fonts': {'count': 0, 'totalSize': 0},
    }
    
    # Count external JavaScript files
    for script in soup.find_all('script', src=True):
        resources['JavaScript']['count'] += 1
    
    # Count external CSS files
    for link in soup.find_all('link', rel='stylesheet'):
        resources['CSS']['count'] += 1
    
    # Count style tags (inline CSS blocks)
    for style in soup.find_all('style'):
        if style.string:
            resources['CSS']['totalSize'] += len(style.string.encode('utf-8'))
    
    # Count images
    for img in soup.find_all('img'):
        resources['Images']['count'] += 1
    
    # Count fonts (from link tags with font preloads)
    for link in soup.find_all('link', rel='preload'):
        if link.get('as') == 'font':
            resources['Fonts']['count'] += 1
    
    # Also check for @font-face in inline styles
    for style in soup.find_all('style'):
        if style.string and '@font-face' in style.string:
            resources['Fonts']['count'] += style.string.count('@font-face')
    
    return resources

def calculate_crawlability_score(html_size: int) -> int:
    """Calculate a crawlability score based on HTML size relative to 2MB limit"""
    if html_size > GOOGLEBOT_LIMIT:
        # Over limit: score decreases based on how much over
        over_percentage = (html_size - GOOGLEBOT_LIMIT) / GOOGLEBOT_LIMIT
        return max(0, int(30 - (over_percentage * 30)))
    elif html_size > GOOGLEBOT_LIMIT * WARNING_THRESHOLD:
        # Warning zone (80-100% of limit)
        usage_percentage = html_size / GOOGLEBOT_LIMIT
        return int(50 + (1 - usage_percentage) * 100)
    else:
        # Under 80% of limit
        usage_percentage = html_size / GOOGLEBOT_LIMIT
        return int(70 + (1 - usage_percentage) * 30)

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/analyze", response_model=UrlAnalyzeResponse)
async def analyze_url(request: UrlAnalyzeRequest):
    """Analyze a URL to check if it exceeds Google's 2MB crawl limit"""
    url = request.url.strip()
    
    # Add https:// if no protocol specified
    if not url.startswith('http://') and not url.startswith('https://'):
        url = 'https://' + url
    
    # Validate URL format
    try:
        parsed = urlparse(url)
        if not parsed.scheme or not parsed.netloc:
            raise ValueError("Invalid URL format")
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid URL format")
    
    try:
        start_time = time.time()
        
        # Fetch the URL with a timeout and user agent
        headers = {
            'User-Agent': 'Mozilla/5.0 (compatible; 2MB-Checker/1.0; +https://seo-size-validator.preview.emergentagent.com)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate',
            'Connection': 'keep-alive',
        }
        
        response = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
        response.raise_for_status()
        
        load_time = round(time.time() - start_time, 2)
        
        # Get the HTML content
        html_content = response.text
        html_bytes = html_content.encode('utf-8')
        html_size = len(html_bytes)
        
        # Calculate compressed size
        compressed_content = gzip.compress(html_bytes)
        html_size_compressed = len(compressed_content)
        
        # Analyze resources in HTML
        resources = analyze_html_resources(html_content, url)
        
        # Build resource details list
        resources_details = []
        total_resources = 0
        for res_type, data in resources.items():
            if data['count'] > 0 or data['totalSize'] > 0:
                resources_details.append(ResourceDetail(
                    type=res_type,
                    count=data['count'],
                    totalSize=data['totalSize']
                ))
                total_resources += data['count']
        
        # Determine status
        if html_size > GOOGLEBOT_LIMIT:
            status = "fail"
            truncated_content = True
            truncated_at = GOOGLEBOT_LIMIT
        elif html_size > GOOGLEBOT_LIMIT * WARNING_THRESHOLD:
            status = "warning"
            truncated_content = False
            truncated_at = None
        else:
            status = "pass"
            truncated_content = False
            truncated_at = None
        
        # Calculate crawlability score
        crawlability_score = calculate_crawlability_score(html_size)
        
        return UrlAnalyzeResponse(
            url=url,
            status=status,
            htmlSize=html_size,
            htmlSizeCompressed=html_size_compressed,
            totalResources=total_resources,
            resourcesDetails=resources_details,
            loadTime=load_time,
            truncatedContent=truncated_content,
            truncatedAt=truncated_at,
            crawlabilityScore=crawlability_score,
            timestamp=datetime.now(timezone.utc).isoformat()
        )
        
    except requests.exceptions.Timeout:
        raise HTTPException(status_code=408, detail="Request timeout - the URL took too long to respond")
    except requests.exceptions.SSLError:
        raise HTTPException(status_code=400, detail="SSL certificate error - unable to verify the website's security certificate")
    except requests.exceptions.ConnectionError:
        raise HTTPException(status_code=400, detail="Connection error - unable to connect to the URL")
    except requests.exceptions.HTTPError as e:
        raise HTTPException(status_code=400, detail=f"HTTP error: {e.response.status_code} - {e.response.reason}")
    except Exception as e:
        logger.error(f"Error analyzing URL {url}: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error analyzing URL: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()