import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, defaultLanguage } from '../data/translations';

const LanguageContext = createContext();

// Supported language codes
const supportedLanguages = ['en', 'de', 'el', 'es', 'fr'];

// Extract language from pathname
const getLanguageFromPath = (pathname) => {
  const pathParts = pathname.split('/').filter(Boolean);
  if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0]) && pathParts[0] !== 'en') {
    return pathParts[0];
  }
  return 'en'; // Default to English
};

// Get path without language prefix
const getPathWithoutLang = (pathname) => {
  const pathParts = pathname.split('/').filter(Boolean);
  if (pathParts.length > 0 && supportedLanguages.includes(pathParts[0]) && pathParts[0] !== 'en') {
    return '/' + pathParts.slice(1).join('/') || '/';
  }
  return pathname;
};

export const LanguageProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [language, setLanguage] = useState(() => {
    return getLanguageFromPath(location.pathname);
  });

  // Update language when URL changes
  useEffect(() => {
    const pathLang = getLanguageFromPath(location.pathname);
    if (pathLang !== language) {
      setLanguage(pathLang);
    }
  }, [location.pathname, language]);

  const t = translations[language] || translations[defaultLanguage];

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      const currentPath = getPathWithoutLang(location.pathname);
      let newPath;
      
      if (newLang === 'en') {
        // English goes to root
        newPath = currentPath || '/';
      } else {
        // Other languages get prefix
        newPath = `/${newLang}${currentPath === '/' ? '' : currentPath}`;
      }
      
      navigate(newPath);
      setLanguage(newLang);
    }
  };

  // Helper function to get localized path
  const getLocalizedPath = (path) => {
    if (language === 'en') {
      return path;
    }
    return `/${language}${path === '/' ? '' : path}`;
  };

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, getLocalizedPath }}>
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
