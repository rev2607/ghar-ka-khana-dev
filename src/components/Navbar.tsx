import React from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';

const Navbar = () => {
  return (
    <header className="w-full shadow-lg bg-white border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-6 py-2 max-w-[1600px] mx-auto">
        {/* Left: Logo and tagline */}
        <div className="flex items-center space-x-3 min-w-[320px]">
          <img 
            src="/logo.png" 
            alt="Ghar-Ka-Khana Logo" 
            className="h-16 w-auto object-contain"
          />
          <span className="text-xs md:text-sm font-semibold text-black whitespace-nowrap">
            Homely Food being delivered at your<br />Home & Office
          </span>
        </div>
        {/* Center: Launching soon banner */}
        <div className="flex-1 flex justify-center">
          <CountdownTimer targetDate="2025-07-06T00:00:00" size="small" />
        </div>
        {/* Right: Nav links */}
        <nav className="flex items-center space-x-4 min-w-[420px] justify-end">
          <Link to="/" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Home</Link>
          <Link to="/menu" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Menu</Link>
          <Link to="/about" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">About</Link>
          <Link to="/contact" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Contact</Link>
          <Link to="/login" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Login/Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
