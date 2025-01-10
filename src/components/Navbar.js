import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'text-blue-500' : 'text-gray-600';
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Step & TikTok Analysis
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className={`hover:text-blue-500 transition-colors ${isActive('/')}`}>Introduction</Link>
            <Link to="/step-analysis" className={`hover:text-blue-500 transition-colors ${isActive('/step-analysis')}`}>Step Analysis</Link>
            <Link to="/social-media" className={`hover:text-blue-500 transition-colors ${isActive('/social-media')}`}>Social Media</Link>
            <Link to="/relationship" className={`hover:text-blue-500 transition-colors ${isActive('/relationship')}`}>Relationship</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
