import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UrlChecker from '../components/UrlChecker';
import AboutSection from '../components/AboutSection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
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
