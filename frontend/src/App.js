import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/HomePage";
import DocumentationPage from "./pages/DocumentationPage";

// Supported languages (excluding 'en' which is the default at root)
const supportedLanguages = ['de', 'el', 'es', 'fr'];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LanguageProvider>
          <Routes>
            {/* English (default) routes - no prefix */}
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            
            {/* Language-specific routes */}
            {supportedLanguages.map(lang => (
              <Route key={lang} path={`/${lang}/*`} element={
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/documentation" element={<DocumentationPage />} />
                </Routes>
              } />
            ))}
            
            {/* Redirect /en to root for SEO */}
            <Route path="/en" element={<Navigate to="/" replace />} />
            <Route path="/en/*" element={<Navigate to="/" replace />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
