import React, { useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ 
  title, 
  description, 
  keywords,
  path = '/',
  type = 'website',
  image = 'https://seo-size-validator.preview.emergentagent.com/og-image.png'
}) => {
  const { language, getLocalizedPath } = useLanguage();
  const siteUrl = 'https://seo-size-validator.preview.emergentagent.com';
  
  // Get the canonical URL for current language
  const localizedPath = getLocalizedPath(path);
  const fullCanonical = `${siteUrl}${localizedPath}`;
  
  // Generate hreflang URLs for all languages (memoized)
  const hreflangUrls = useMemo(() => ({
    en: `${siteUrl}${path}`,
    de: `${siteUrl}/de${path === '/' ? '' : path}`,
    el: `${siteUrl}/el${path === '/' ? '' : path}`,
    es: `${siteUrl}/es${path === '/' ? '' : path}`,
    fr: `${siteUrl}/fr${path === '/' ? '' : path}`,
  }), [path, siteUrl]);
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Primary Meta Tags
    updateMetaTag('title', title);
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Update canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);
    
    // Remove existing hreflang tags
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    
    // Add hreflang tags for SEO
    Object.entries(hreflangUrls).forEach(([lang, url]) => {
      const hreflangLink = document.createElement('link');
      hreflangLink.setAttribute('rel', 'alternate');
      hreflangLink.setAttribute('hreflang', lang);
      hreflangLink.setAttribute('href', url);
      document.head.appendChild(hreflangLink);
    });
    
    // Add x-default hreflang (points to English)
    const xDefaultLink = document.createElement('link');
    xDefaultLink.setAttribute('rel', 'alternate');
    xDefaultLink.setAttribute('hreflang', 'x-default');
    xDefaultLink.setAttribute('href', hreflangUrls.en);
    document.head.appendChild(xDefaultLink);
    
    // Open Graph
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullCanonical, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Google Bot Limit Checker', true);
    updateMetaTag('og:locale', language === 'en' ? 'en_US' : `${language}_${language.toUpperCase()}`, true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', fullCanonical);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [title, description, keywords, path, type, image, fullCanonical, language, hreflangUrls]);
  
  return null;
};

export default SEO;
