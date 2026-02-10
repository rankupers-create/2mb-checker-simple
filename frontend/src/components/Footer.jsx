import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{t.builtWith}</span>
            <Heart size={14} className="text-red-500" fill="currentColor" />
            <span>{t.forSeoEnthusiasts}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href={t.googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ExternalLink size={14} />
              {t.officialDocs}
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            {t.notAffiliated}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
