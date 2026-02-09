import React from 'react';
import { Info, FileText, TrendingUp, Database, Wrench, Search, HelpCircle, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import { documentationContent } from '../data/mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const iconMap = {
  FileText: FileText,
  TrendingUp: TrendingUp,
  Database: Database,
  Wrench: Wrench,
  Search: Search,
  Info: Info
};

const AboutSection = () => {
  const content = documentationContent;

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
            <h2 className="text-xl font-semibold text-gray-900">About the 2MB Limit</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* HTML Files */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileText size={16} className="text-blue-500" />
              HTML Files:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Googlebot stops crawling an HTML file after the first 2 MB. Any content after this cutoff is not indexed. This limit applies to the uncompressed data.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Database size={16} className="text-blue-500" />
              Resources:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Each resource referenced in the HTML (CSS, JavaScript) is fetched separately and is subject to the same 2 MB limit.
            </p>
          </div>

          {/* PDF Files */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <FileText size={16} className="text-blue-500" />
              PDF Files:
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Googlebot is more generous with PDFs, crawling the first 64 MB.
            </p>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl p-4">
            <p className="text-gray-700 italic">
              "Once the limit is reached, Googlebot interrupts the retrieval and sends only the downloaded part for indexing."
            </p>
            <p className="text-sm text-gray-500 mt-2 font-medium">— Google Search Central</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
