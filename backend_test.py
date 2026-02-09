#!/usr/bin/env python3
"""
Backend API Testing for 2MB Googlebot Limit Checker
Tests the POST /api/analyze endpoint thoroughly
"""

import requests
import json
import time
from urllib.parse import urlparse

# Backend URL from environment
BACKEND_URL = "https://seo-size-validator.preview.emergentagent.com"
ANALYZE_ENDPOINT = f"{BACKEND_URL}/api/analyze"

def test_analyze_endpoint():
    """Comprehensive testing of the /api/analyze endpoint"""
    print("=" * 60)
    print("TESTING 2MB Googlebot Limit Checker - Backend API")
    print("=" * 60)
    
    results = {
        "tests_passed": 0,
        "tests_failed": 0,
        "critical_issues": [],
        "minor_issues": []
    }
    
    # Test 1: Valid URL - Google.com
    print("\n1. Testing POST /api/analyze with google.com...")
    try:
        payload = {"url": "https://google.com"}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response received: ✓")
            
            # Validate required fields
            required_fields = [
                'url', 'status', 'htmlSize', 'htmlSizeCompressed', 
                'totalResources', 'resourcesDetails', 'loadTime', 
                'truncatedContent', 'crawlabilityScore', 'timestamp'
            ]
            
            missing_fields = []
            for field in required_fields:
                if field not in data:
                    missing_fields.append(field)
            
            if missing_fields:
                results["critical_issues"].append(f"Missing required fields in google.com response: {missing_fields}")
                results["tests_failed"] += 1
                print(f"   ❌ Missing fields: {missing_fields}")
            else:
                results["tests_passed"] += 1
                print(f"   ✅ All required fields present")
                print(f"   HTML Size: {data['htmlSize']} bytes")
                print(f"   Compressed Size: {data['htmlSizeCompressed']} bytes")
                print(f"   Status: {data['status']}")
                print(f"   Crawlability Score: {data['crawlabilityScore']}")
                print(f"   Load Time: {data['loadTime']}s")
        else:
            results["critical_issues"].append(f"Google.com test failed with status {response.status_code}: {response.text}")
            results["tests_failed"] += 1
            print(f"   ❌ Failed with status {response.status_code}")
            print(f"   Response: {response.text}")
            
    except Exception as e:
        results["critical_issues"].append(f"Google.com test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Test 2: Valid URL - Wikipedia.org
    print("\n2. Testing POST /api/analyze with wikipedia.org...")
    try:
        payload = {"url": "https://wikipedia.org"}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"   Response received: ✓")
            
            # Check if response structure is consistent
            if 'htmlSize' in data and 'status' in data:
                results["tests_passed"] += 1
                print(f"   ✅ Wikipedia analysis successful")
                print(f"   HTML Size: {data['htmlSize']} bytes")
                print(f"   Status: {data['status']}")
            else:
                results["critical_issues"].append("Wikipedia.org response missing critical fields")
                results["tests_failed"] += 1
                print(f"   ❌ Response structure issue")
        else:
            results["critical_issues"].append(f"Wikipedia.org test failed with status {response.status_code}: {response.text}")
            results["tests_failed"] += 1
            print(f"   ❌ Failed with status {response.status_code}")
            
    except Exception as e:
        results["critical_issues"].append(f"Wikipedia.org test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Test 3: Invalid URL
    print("\n3. Testing POST /api/analyze with invalid URL...")
    try:
        payload = {"url": "not-a-valid-url"}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 400:
            results["tests_passed"] += 1
            print(f"   ✅ Correctly rejected invalid URL")
        elif response.status_code == 422:
            # Pydantic validation error is also acceptable
            results["tests_passed"] += 1
            print(f"   ✅ Correctly rejected invalid URL (validation error)")
        else:
            results["critical_issues"].append(f"Invalid URL should return 400/422, got {response.status_code}")
            results["tests_failed"] += 1
            print(f"   ❌ Should return 400/422 for invalid URL, got {response.status_code}")
            
    except Exception as e:
        results["critical_issues"].append(f"Invalid URL test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Test 4: Empty URL
    print("\n4. Testing POST /api/analyze with empty URL...")
    try:
        payload = {"url": ""}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 400:
            results["tests_passed"] += 1
            print(f"   ✅ Correctly rejected empty URL")
        elif response.status_code == 422:
            # Pydantic validation error is also acceptable
            results["tests_passed"] += 1
            print(f"   ✅ Correctly rejected empty URL (validation error)")
        else:
            results["critical_issues"].append(f"Empty URL should return 400/422, got {response.status_code}")
            results["tests_failed"] += 1
            print(f"   ❌ Should return 400/422 for empty URL, got {response.status_code}")
            
    except Exception as e:
        results["critical_issues"].append(f"Empty URL test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Test 5: Missing URL field
    print("\n5. Testing POST /api/analyze with missing URL field...")
    try:
        payload = {}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 422:
            results["tests_passed"] += 1
            print(f"   ✅ Correctly rejected missing URL field")
        else:
            results["critical_issues"].append(f"Missing URL field should return 422, got {response.status_code}")
            results["tests_failed"] += 1
            print(f"   ❌ Should return 422 for missing URL field, got {response.status_code}")
            
    except Exception as e:
        results["critical_issues"].append(f"Missing URL field test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Test 6: URL without protocol (should be handled gracefully)
    print("\n6. Testing POST /api/analyze with URL without protocol...")
    try:
        payload = {"url": "github.com"}
        response = requests.post(ANALYZE_ENDPOINT, json=payload, timeout=30)
        print(f"   Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            if data['url'].startswith('https://github.com'):
                results["tests_passed"] += 1
                print(f"   ✅ Correctly handled URL without protocol")
                print(f"   Processed URL: {data['url']}")
            else:
                results["minor_issues"].append("URL without protocol not processed correctly")
                results["tests_failed"] += 1
                print(f"   ❌ URL processing issue")
        else:
            results["minor_issues"].append(f"URL without protocol failed with {response.status_code}")
            results["tests_failed"] += 1
            print(f"   ❌ Failed to handle URL without protocol")
            
    except Exception as e:
        results["minor_issues"].append(f"URL without protocol test exception: {str(e)}")
        results["tests_failed"] += 1
        print(f"   ❌ Exception: {str(e)}")
    
    # Print Results Summary
    print("\n" + "=" * 60)
    print("TEST RESULTS SUMMARY")
    print("=" * 60)
    print(f"Tests Passed: {results['tests_passed']}")
    print(f"Tests Failed: {results['tests_failed']}")
    
    if results['critical_issues']:
        print(f"\n🚨 CRITICAL ISSUES ({len(results['critical_issues'])}):")
        for issue in results['critical_issues']:
            print(f"   • {issue}")
    
    if results['minor_issues']:
        print(f"\n⚠️  MINOR ISSUES ({len(results['minor_issues'])}):")
        for issue in results['minor_issues']:
            print(f"   • {issue}")
    
    if not results['critical_issues'] and not results['minor_issues']:
        print("\n✅ ALL TESTS PASSED - NO ISSUES FOUND")
    
    return results

if __name__ == "__main__":
    print("Starting Backend API Tests...")
    print(f"Testing endpoint: {ANALYZE_ENDPOINT}")
    
    # Run the tests
    test_results = test_analyze_endpoint()
    
    # Exit with appropriate code
    if test_results['critical_issues']:
        exit(1)  # Critical issues found
    else:
        exit(0)  # All good