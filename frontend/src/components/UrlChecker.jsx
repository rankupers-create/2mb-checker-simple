import React, { useState } from 'react';
import { Search, ExternalLink, Info, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import ResultsPanel from './ResultsPanel';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UrlChecker = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const { t } = useLanguage();

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
      setError(t.enterUrl);
      return;
    }

    let checkUrl = url.trim();
    if (!checkUrl.startsWith('http://') && !checkUrl.startsWith('https://')) {
      checkUrl = 'https://' + checkUrl;
    }

    if (!validateUrl(checkUrl)) {
      setError(t.invalidUrl);
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/analyze`, {
        url: checkUrl
      });
      setResult(response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.detail) {
        setError(err.response.data.detail);
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('An error occurred while analyzing the URL');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          {t.heroTitle}{' '}
          <span className="text-blue-600">{t.heroTitleHighlight}</span>.
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t.heroSubtitle}
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
                placeholder={t.placeholder}
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
                    {t.analyzing}
                  </>
                ) : (
                  t.checkNow
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
            href={t.googleDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            {t.officialDocs}
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Tip */}
        <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 flex items-start gap-3">
          <Info size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700">
            <strong className="text-gray-800">{t.tipTitle}</strong> {t.tipText}{' '}
            <a
              href="https://www.screamingfrog.co.uk/seo-spider/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {t.screamingFrog}
            </a>{' '}
            {t.tipTextEnd}
          </p>
        </div>
      </div>

      {/* Results */}
      {result && <ResultsPanel result={result} />}
    </div>
  );
};

export default UrlChecker;
