// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the home icon from react-icons

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Home Icon */}
        <h1 className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-400 transition-colors duration-300 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
        </h1>
        
        {/* Navigation Links */}
        <nav>
          <Link 
            to="/sankey" 
            className="text-lg font-semibold hover:text-gray-400 transition-colors duration-300"
          >
            Sankey Chart
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
