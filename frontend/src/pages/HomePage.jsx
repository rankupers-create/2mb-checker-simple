import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UrlChecker from '../components/UrlChecker';
import AboutSection from '../components/AboutSection';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <SEO 
        title={`${t.appName} - ${t.heroTitle} ${t.heroTitleHighlight}`}
        description={t.heroSubtitle}
        keywords="googlebot limit, 2mb limit, seo tool, crawl limit checker, google indexing, html size checker, seo analysis, googlebot crawler, website optimization, search engine optimization, crawl budget"
        path="/"
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
