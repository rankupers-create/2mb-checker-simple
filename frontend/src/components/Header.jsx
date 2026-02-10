import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, FileText, Home } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg transition-shadow">
              G
            </div>
            <span className="font-semibold text-gray-800 text-lg tracking-tight">
              Google Bot Limit Checker
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Home size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>
            <Link
              to="/documentation"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/documentation'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <FileText size={16} />
              <span className="hidden sm:inline">Documentation</span>
            </Link>
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/googlebot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">Google Docs</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
