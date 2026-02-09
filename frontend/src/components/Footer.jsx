import React from 'react';
import { Heart, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Built with</span>
            <Heart size={14} className="text-red-500" fill="currentColor" />
            <span>for SEO enthusiasts</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/googlebot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ExternalLink size={14} />
              Official Docs
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            This tool is not affiliated with Google. It's designed to help webmasters and SEO professionals check their page sizes against Google's documented 2MB crawl limit.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
