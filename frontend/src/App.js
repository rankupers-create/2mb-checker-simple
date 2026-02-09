import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocumentationPage from "./pages/DocumentationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
