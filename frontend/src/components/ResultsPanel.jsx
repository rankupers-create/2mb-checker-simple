import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, FileText, Clock, Gauge, ArrowRight, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { Progress } from './ui/progress';
import { formatBytes, calculatePercentage } from '../data/mock';

const ResultsPanel = ({ result }) => {
  const limit = 2097152; // 2MB in bytes
  const percentage = calculatePercentage(result.htmlSize);
  
  const getStatusConfig = () => {
    switch (result.status) {
      case 'pass':
        return {
          icon: CheckCircle2,
          color: 'text-green-500',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          progressColor: 'bg-green-500',
          title: 'All Clear!',
          message: 'Your page is within Google\'s 2MB crawl limit. All content should be indexed properly.'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          color: 'text-amber-500',
          bgColor: 'bg-amber-50',
          borderColor: 'border-amber-200',
          progressColor: 'bg-amber-500',
          title: 'Approaching Limit',
          message: 'Your page is close to the 2MB limit. Consider optimizing to ensure all content is indexed.'
        };
      case 'fail':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bgColor: 'bg-red-50',
          borderColor: 'border-red-200',
          progressColor: 'bg-red-500',
          title: 'Limit Exceeded!',
          message: 'Your page exceeds the 2MB limit. Content after the cutoff will NOT be indexed by Google.'
        };
      default:
        return {
          icon: FileText,
          color: 'text-gray-500',
          bgColor: 'bg-gray-50',
          borderColor: 'border-gray-200',
          progressColor: 'bg-gray-500',
          title: 'Analysis Complete',
          message: 'Review the results below.'
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <div className="max-w-4xl mx-auto mt-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Status Card */}
      <div className={`rounded-2xl border-2 ${config.borderColor} ${config.bgColor} p-6 mb-6`}>
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-full ${config.bgColor} border ${config.borderColor}`}>
            <StatusIcon size={28} className={config.color} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{config.title}</h2>
            <p className="text-gray-600 mb-4">{config.message}</p>
            
            {/* URL */}
            <div className="bg-white/50 rounded-lg px-3 py-2 mb-4 inline-block">
              <span className="text-sm text-gray-500">Analyzed URL: </span>
              <span className="text-sm font-medium text-gray-800">{result.url}</span>
            </div>

            {/* Size Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">HTML Size</span>
                <span className="font-medium text-gray-900">
                  {formatBytes(result.htmlSize)} / {formatBytes(limit)}
                </span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${config.progressColor} transition-all duration-1000 ease-out rounded-full`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>0 MB</span>
                <span>{percentage.toFixed(1)}% of limit</span>
                <span>2 MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <FileText size={16} />
            <span className="text-sm">HTML Size</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatBytes(result.htmlSize)}</p>
          <p className="text-xs text-gray-500 mt-1">Uncompressed</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Zap size={16} />
            <span className="text-sm">Compressed</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{formatBytes(result.htmlSizeCompressed)}</p>
          <p className="text-xs text-gray-500 mt-1">Gzip size</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Clock size={16} />
            <span className="text-sm">Load Time</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{result.loadTime}s</p>
          <p className="text-xs text-gray-500 mt-1">Estimated</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <Gauge size={16} />
            <span className="text-sm">Crawl Score</span>
          </div>
          <p className={`text-2xl font-bold ${
            result.crawlabilityScore >= 70 ? 'text-green-600' :
            result.crawlabilityScore >= 50 ? 'text-amber-600' : 'text-red-600'
          }`}>
            {result.crawlabilityScore}/100
          </p>
          <p className="text-xs text-gray-500 mt-1">Crawlability</p>
        </div>
      </div>

      {/* Resources Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-blue-500" />
          Resources Breakdown
        </h3>
        <div className="space-y-4">
          {result.resourcesDetails.map((resource, index) => {
            const resourcePercentage = Math.min((resource.totalSize / limit) * 100, 100);
            return (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{resource.type}</span>
                  <span className="text-sm text-gray-500">
                    {resource.count} files • {formatBytes(resource.totalSize)}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${resourcePercentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Truncation Warning */}
      {result.truncatedContent && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <TrendingDown size={24} className="text-red-500 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-red-800 mb-1">Content Truncation Detected</h4>
              <p className="text-sm text-red-700 mb-3">
                Googlebot will stop crawling at byte {formatBytes(result.truncatedAt)}. 
                Approximately {formatBytes(result.htmlSize - result.truncatedAt)} of your content 
                will NOT be indexed.
              </p>
              <div className="bg-red-100 rounded-lg p-3">
                <p className="text-xs text-red-800 font-medium">
                  "Once the limit is reached, Googlebot interrupts the retrieval and sends only the downloaded part for indexing."
                  <span className="block mt-1 font-normal">— Google Search Central</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <ArrowRight size={20} className="text-blue-500" />
          Recommendations
        </h3>
        <ul className="space-y-3">
          {result.status === 'pass' && (
            <>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Your HTML is within the safe limit - great job!</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>Continue monitoring after major content updates</span>
              </li>
            </>
          )}
          {result.status === 'warning' && (
            <>
              <li className="flex items-start gap-2 text-gray-700">
                <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Consider removing inline JavaScript and CSS</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Minify your HTML output to reduce size</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <AlertTriangle size={18} className="text-amber-500 mt-0.5 flex-shrink-0" />
                <span>Prioritize important content at the top of the page</span>
              </li>
            </>
          )}
          {result.status === 'fail' && (
            <>
              <li className="flex items-start gap-2 text-gray-700">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span><strong>Urgent:</strong> Move inline CSS and JavaScript to external files</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Remove HTML comments and unnecessary whitespace</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Implement pagination for long content</span>
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <XCircle size={18} className="text-red-500 mt-0.5 flex-shrink-0" />
                <span>Ensure critical SEO content appears in the first 2MB</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPanel;
