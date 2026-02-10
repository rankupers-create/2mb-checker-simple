import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
      return langParam;
    }
    // Check localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    // Check browser language
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
      return browserLang;
    }
    return defaultLanguage;
  });

  const t = translations[language] || translations[defaultLanguage];

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
      localStorage.setItem('language', newLang);
      // Update URL without reload
      const url = new URL(window.location);
      url.searchParams.set('lang', newLang);
      window.history.pushState({}, '', url);
    }
  };

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
