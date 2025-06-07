import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-[#e5e5e5] w-full">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo and tagline on the left */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Ghar-Ka-Khana Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          <span className="text-xs md:text-sm font-semibold text-[#800000] ml-2">
            Homely Food being delivered at your Home & Office
          </span>
        </div>
        {/* Centered navigation */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-10">
            <Link to="/" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Home</Link>
            <Link to="/menu" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Menu</Link>
            <Link to="/about" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">About</Link>
            <Link to="/contact" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Contact</Link>
          </div>
        </div>
        {/* Login/Register on the right */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-[#222] text-base font-medium hover:underline">login/register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
