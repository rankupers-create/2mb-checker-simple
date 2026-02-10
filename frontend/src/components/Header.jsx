import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, FileText, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const location = useLocation();
  const { t } = useLanguage();

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
              {t.appName}
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
              <span className="hidden sm:inline">{t.home}</span>
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
              <span className="hidden sm:inline">{t.documentation}</span>
            </Link>
            <a
              href={t.googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{t.googleDocs}</span>
            </a>
            <div className="ml-2 border-l border-gray-200 pl-2">
              <LanguageSelector />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
