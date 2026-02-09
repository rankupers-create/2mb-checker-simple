import React, { useState } from 'react';
import { Search, ExternalLink, Info, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import ResultsPanel from './ResultsPanel';

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    let checkUrl = url.trim();
    if (!checkUrl.startsWith('http://') && !checkUrl.startsWith('https://')) {
      checkUrl = 'https://' + checkUrl;
    }

    if (!validateUrl(checkUrl)) {
      setError('Please enter a valid URL');
      return;
    }

    setLoading(true);
    
    // Simulated analysis - will be replaced with actual backend call
    setTimeout(() => {
      const mockResult = {
        url: checkUrl,
        status: Math.random() > 0.3 ? 'pass' : Math.random() > 0.5 ? 'warning' : 'fail',
        htmlSize: Math.floor(Math.random() * 2500000) + 100000,
        htmlSizeCompressed: Math.floor(Math.random() * 500000) + 50000,
        totalResources: Math.floor(Math.random() * 50) + 10,
        resourcesDetails: [
          { type: 'JavaScript', count: Math.floor(Math.random() * 15) + 3, totalSize: Math.floor(Math.random() * 1000000) + 100000 },
          { type: 'CSS', count: Math.floor(Math.random() * 10) + 2, totalSize: Math.floor(Math.random() * 300000) + 50000 },
          { type: 'Images', count: Math.floor(Math.random() * 20) + 5, totalSize: Math.floor(Math.random() * 3000000) + 500000 },
          { type: 'Fonts', count: Math.floor(Math.random() * 5) + 1, totalSize: Math.floor(Math.random() * 200000) + 30000 },
        ],
        loadTime: (Math.random() * 5 + 0.5).toFixed(2),
        truncatedContent: false,
        crawlabilityScore: Math.floor(Math.random() * 40) + 60,
        timestamp: new Date().toISOString()
      };

      // Determine status based on size
      const limit = 2097152; // 2MB
      if (mockResult.htmlSize > limit) {
        mockResult.status = 'fail';
        mockResult.truncatedContent = true;
        mockResult.truncatedAt = limit;
        mockResult.crawlabilityScore = Math.floor(Math.random() * 30) + 10;
      } else if (mockResult.htmlSize > limit * 0.8) {
        mockResult.status = 'warning';
        mockResult.crawlabilityScore = Math.floor(Math.random() * 20) + 50;
      } else {
        mockResult.status = 'pass';
      }

      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Google's crawl limit is now{' '}
          <span className="text-blue-600">2 MB</span>.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Check if your HTML content is being cut off by the indexing bot.
        </p>
      </div>

      {/* Search Form */}
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleCheck} className="relative">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-2 transition-shadow hover:shadow-xl focus-within:shadow-xl focus-within:ring-2 focus-within:ring-blue-500/20">
            <div className="flex items-center gap-2">
              <div className="pl-4">
                <Search className="text-gray-400" size={22} />
              </div>
              <Input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter URL (e.g. https://example.com)"
                className="flex-1 border-0 bg-transparent text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-12"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Check Now'
                )}
              </Button>
            </div>
          </div>
        </form>

        {error && (
          <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
        )}

        {/* Official Documentation Link */}
        <div className="text-center mt-4">
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/googlebot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            Official Googlebot Documentation
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Tip */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-3">
          <Info size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <strong className="text-gray-800">Tip:</strong> For a robust, bulk analysis, use{' '}
            <a
              href="https://www.screamingfrog.co.uk/seo-spider/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Screaming Frog
            </a>{' '}
            which simulates this limit perfectly.
          </p>
        </div>
      </div>

      {/* Results */}
      {result && <ResultsPanel result={result} />}
    </div>
  );
};

export default UrlChecker;
