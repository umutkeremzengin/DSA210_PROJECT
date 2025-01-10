import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IntroductionPage from './Pages/IntroductionPage';
import Relationship from './Pages/Relationship';
import SocialMedia from './Pages/Social-Media';
import StepAnalysis from './Pages/StepAnalysis';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<IntroductionPage />} />
          <Route path="/relationship" element={<Relationship />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/step-analysis" element={<StepAnalysis />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;