import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    const baseStyle = "transition-colors duration-300 font-semibold text-lg relative group";
    const activeStyle = "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent";
    const inactiveStyle = "text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent";
    
    return `${baseStyle} ${location.pathname === path ? activeStyle : inactiveStyle}`;
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            <span className="text-blue-600">Digital</span>
            <span className="text-gray-500 mx-2">vs</span>
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Physical</span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className={isActive('/')}>
              Introduction
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/step-analysis" className={isActive('/step-analysis')}>
              Step Analysis
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/social-media" className={isActive('/social-media')}>
              Social Media
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/relationship" className={isActive('/relationship')}>
              Relationship
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;