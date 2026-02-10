// Mock data for the 2MB Checker tool

export const mockAnalysisResult = {
  url: "https://example.com",
  status: "pass", // "pass", "warning", "fail"
  htmlSize: 1245678, // bytes
  htmlSizeCompressed: 456789,
  totalResources: 45,
  resourcesDetails: [
    { type: "JavaScript", count: 12, totalSize: 856000, avgSize: 71333 },
    { type: "CSS", count: 8, totalSize: 245000, avgSize: 30625 },
    { type: "Images", count: 18, totalSize: 2450000, avgSize: 136111 },
    { type: "Fonts", count: 4, totalSize: 180000, avgSize: 45000 },
    { type: "Other", count: 3, totalSize: 45000, avgSize: 15000 },
  ],
  loadTime: 2.4,
  truncatedContent: false,
  recommendations: [
    "Your HTML is within the safe limit",
    "Consider lazy loading some images",
    "JavaScript files could be minified further"
  ],
  crawlabilityScore: 92,
  timestamp: new Date().toISOString()
};

export const mockFailResult = {
  url: "https://heavy-site.com",
  status: "fail",
  htmlSize: 2456789,
  htmlSizeCompressed: 890123,
  totalResources: 78,
  resourcesDetails: [
    { type: "JavaScript", count: 25, totalSize: 1856000, avgSize: 74240 },
    { type: "CSS", count: 15, totalSize: 545000, avgSize: 36333 },
    { type: "Images", count: 30, totalSize: 4450000, avgSize: 148333 },
    { type: "Fonts", count: 5, totalSize: 280000, avgSize: 56000 },
    { type: "Other", count: 3, totalSize: 95000, avgSize: 31667 },
  ],
  loadTime: 5.8,
  truncatedContent: true,
  truncatedAt: 2097152, // 2MB in bytes
  recommendations: [
    "⚠️ Your HTML exceeds the 2MB limit!",
    "Content after byte 2,097,152 will NOT be indexed",
    "Remove inline JavaScript and CSS",
    "Consider server-side rendering critical content first"
  ],
  crawlabilityScore: 34,
  timestamp: new Date().toISOString()
};

export const documentationContent = {
  intro: {
    title: "Understanding Google's 2MB Crawl Limit",
    description: "Google officially documented a critical limitation: Googlebot will only crawl and index the first 2 MB of an HTML page. Any content beyond this limit is simply ignored, potentially leaving important parts of your website invisible to search engines."
  },
  sections: [
    {
      title: "What is the 2MB Limit?",
      content: "Googlebot, the web crawler used by Google, has a limit on how much data it will download from a single page. For HTML files, this limit is 2 MB of uncompressed data. Once this limit is reached, Googlebot stops downloading and indexes only what it has received.",
      icon: "FileText"
    },
    {
      title: "Why Does This Matter for SEO?",
      content: "If your important content, links, or structured data appear after the 2MB cutoff point, Google won't see them. This means: important content won't be indexed, internal links might be missed affecting crawl budget, structured data could be truncated, and your rankings could suffer.",
      icon: "TrendingUp"
    },
    {
      title: "What Counts Towards the Limit?",
      content: "The 2MB limit applies to the raw, uncompressed HTML response. This includes all HTML tags, inline CSS, inline JavaScript, comments, and whitespace. External resources (CSS files, JS files, images) are fetched separately and each has its own 2MB limit.",
      icon: "Database"
    },
    {
      title: "PDF Files Have Different Limits",
      content: "For PDF documents, Googlebot is more generous, crawling up to 64 MB of content. However, the same principle applies - content beyond this limit won't be indexed.",
      icon: "FileText"
    },
    {
      title: "How to Fix Oversized Pages",
      content: "1. Remove inline CSS and JavaScript - move them to external files. 2. Minify your HTML output. 3. Remove unnecessary HTML comments. 4. Implement pagination for long content. 5. Use lazy loading for below-the-fold content. 6. Prioritize important content at the top of the HTML.",
      icon: "Wrench"
    },
    {
      title: "Testing Your Pages",
      content: "Use this tool to check if your pages exceed the 2MB limit. For bulk analysis, tools like Screaming Frog can simulate this limit across your entire website. Regular monitoring is recommended, especially after major content updates.",
      icon: "Search"
    }
  ],
  faqs: [
    {
      question: "Does compression help with the 2MB limit?",
      answer: "No. The limit applies to uncompressed data. While gzip compression helps with transfer speed, Googlebot measures the decompressed size."
    },
    {
      question: "Do external resources count towards the limit?",
      answer: "No. External CSS, JavaScript, and images are fetched separately. Each external resource has its own 2MB limit."
    },
    {
      question: "What happens to content after 2MB?",
      answer: "Content beyond 2MB is completely ignored by Googlebot. It won't be indexed, and any links in that portion won't be discovered."
    },
    {
      question: "Is this limit new?",
      answer: "The limit has existed for years, but Google officially documented it in their Search Central documentation in 2024."
    },
    {
      question: "How can I tell if my content is being truncated?",
      answer: "Use this tool to check your page size. You can also inspect the cached version of your page in Google Search to see what Google has actually indexed."
    }
  ],
  sources: [
    {
      title: "Google Search Central - Googlebot Documentation",
      url: "https://developers.google.com/search/docs/crawling-indexing/googlebot"
    },
    {
      title: "Google's Official File Size Limits",
      url: "https://developers.google.com/search/docs/crawling-indexing/googlebot#how-googlebot-accesses-your-site"
    }
  ]
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const calculatePercentage = (size) => {
  const limit = 2097152; // 2MB in bytes
  return Math.min((size / limit) * 100, 100);
};
