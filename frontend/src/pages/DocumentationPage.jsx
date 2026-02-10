import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { documentationContent } from '../data/mock';
import { 
  Info, FileText, TrendingUp, Database, Wrench, Search, 
  HelpCircle, ExternalLink, BookOpen, AlertCircle, CheckCircle2,
  ArrowRight, Lightbulb, Target
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const iconMap = {
  FileText: FileText,
  TrendingUp: TrendingUp,
  Database: Database,
  Wrench: Wrench,
  Search: Search,
  Info: Info
};

const DocumentationPage = () => {
  const content = documentationContent;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Google's 2MB Crawl Limit Explained - Complete SEO Guide | Googlebot Documentation"
        description="Learn everything about Google's 2MB crawl limit for Googlebot. Understand what counts towards the limit, how it affects SEO, and get expert tips to optimize your pages for better indexing."
        keywords="googlebot 2mb limit, google crawl limit explained, seo documentation, googlebot indexing, html size limit google, crawl budget optimization, search engine crawling, website indexing guide"
        canonical="/documentation"
        type="article"
      />
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <BookOpen size={16} />
            Complete Guide
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {content.intro.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.intro.description}
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 mb-10 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Target size={24} />
            <h2 className="text-xl font-semibold">Key Takeaways</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">2 MB</div>
              <div className="text-blue-100 text-sm">Maximum HTML size for indexing</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">64 MB</div>
              <div className="text-blue-100 text-sm">Maximum PDF size for indexing</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">Uncompressed</div>
              <div className="text-blue-100 text-sm">The limit applies to raw data</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <div className="text-3xl font-bold mb-1">Per Resource</div>
              <div className="text-blue-100 text-sm">Each file has its own limit</div>
            </div>
          </div>
        </div>

        {/* Main Sections */}
        <div className="space-y-6 mb-12">
          {content.sections.map((section, index) => {
            const IconComponent = iconMap[section.icon] || Info;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What Counts Section */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle size={24} className="text-amber-600" />
            <h2 className="text-xl font-semibold text-gray-900">What Counts Towards the 2MB Limit?</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" />
                Included in the count:
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  All HTML tags and content
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Inline CSS (style tags)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Inline JavaScript (script tags)
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  HTML comments
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Whitespace and formatting
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-blue-500" />
                Fetched separately:
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  External CSS files
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  External JavaScript files
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Images and media
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Fonts
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={14} className="mt-1 text-gray-400" />
                  Other external resources
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle size={24} className="text-blue-600" />
            <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {content.faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Tips Section */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-8 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb size={24} className="text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900">Pro Tips for Staying Under the Limit</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Move inline CSS to external stylesheets",
              "Move inline JavaScript to external files",
              "Remove HTML comments in production",
              "Minify your HTML output",
              "Use pagination for long content",
              "Prioritize important content first",
              "Lazy load below-the-fold content",
              "Use server-side rendering wisely"
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Official Sources */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <ExternalLink size={20} className="text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Official Sources</h3>
          </div>
          <div className="space-y-3">
            {content.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <div className="p-2 bg-white rounded-lg border border-gray-200 group-hover:border-blue-200 transition-colors">
                  <FileText size={16} className="text-gray-500 group-hover:text-blue-500 transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium text-sm group-hover:text-blue-600 transition-colors">
                    {source.title}
                  </p>
                  <p className="text-gray-500 text-xs truncate">{source.url}</p>
                </div>
                <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DocumentationPage;
