import React, { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords,
  canonical,
  type = 'website',
  image = 'https://seo-size-validator.preview.emergentagent.com/og-image.png'
}) => {
  const siteUrl = 'https://seo-size-validator.preview.emergentagent.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
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
    
    // Open Graph
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', fullCanonical, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Google Bot Limit Checker', true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', fullCanonical);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
  }, [title, description, keywords, canonical, type, image, fullCanonical]);
  
  return null;
};

export default SEO;
