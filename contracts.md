# API Contracts - 2MB Googlebot Limit Checker

## API Endpoints

### POST /api/analyze
Analyzes a URL to check if it exceeds Google's 2MB crawl limit.

**Request Body:**
```json
{
  "url": "https://example.com"
}
```

**Response:**
```json
{
  "url": "https://example.com",
  "status": "pass" | "warning" | "fail",
  "htmlSize": 1245678,
  "htmlSizeCompressed": 456789,
  "totalResources": 45,
  "resourcesDetails": [
    { "type": "JavaScript", "count": 12, "totalSize": 856000 },
    { "type": "CSS", "count": 8, "totalSize": 245000 },
    { "type": "Images", "count": 18, "totalSize": 2450000 },
    { "type": "Fonts", "count": 4, "totalSize": 180000 }
  ],
  "loadTime": 2.4,
  "truncatedContent": false,
  "truncatedAt": null,
  "crawlabilityScore": 92,
  "timestamp": "2025-01-01T00:00:00Z"
}
```

## Mock Data to Replace
- `UrlChecker.jsx`: Remove setTimeout mock, call real `/api/analyze` endpoint
- Results calculated based on actual HTML fetch

## Backend Implementation
1. Create `/api/analyze` endpoint in server.py
2. Fetch URL using requests library
3. Calculate uncompressed HTML size
4. Parse HTML to count external resources (JS, CSS, images, fonts)
5. Calculate crawlability score based on size vs 2MB limit
6. Return analysis results

## Frontend Integration
- Update `UrlChecker.jsx` to call `${BACKEND_URL}/api/analyze` POST endpoint
- Handle loading, error, and success states
- Display real results in ResultsPanel
