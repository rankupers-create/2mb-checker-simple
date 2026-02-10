import React from 'react';
import { Info, FileText, Database } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-10">
      {/* About Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Info size={20} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{t.aboutTitle}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* HTML Files */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileText size={16} className="text-blue-500" />
              {t.htmlFiles}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.htmlFilesDesc}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Database size={16} className="text-blue-500" />
              {t.resources}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.resourcesDesc}
            </p>
          </div>

          {/* PDF Files */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileText size={16} className="text-blue-500" />
              {t.pdfFiles}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t.pdfFilesDesc}
            </p>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-4">
            <p className="text-gray-700 italic">
              {t.googleQuote}
            </p>
            <p className="text-sm text-gray-500 mt-2 font-medium">{t.googleQuoteSource}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
