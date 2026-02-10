import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UrlChecker from '../components/UrlChecker';
import AboutSection from '../components/AboutSection';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title="Google Bot 2MB Limit Checker - Free SEO Tool | Check Googlebot Crawl Limits"
        description="Free tool to check if your website exceeds Google's 2MB crawl limit. Ensure your HTML content is fully indexed by Googlebot. Instant analysis with detailed size breakdown, crawlability score, and SEO recommendations."
        keywords="googlebot limit, 2mb limit, seo tool, crawl limit checker, google indexing, html size checker, seo analysis, googlebot crawler, website optimization, search engine optimization, crawl budget"
        canonical="/"
      />
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <UrlChecker />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
