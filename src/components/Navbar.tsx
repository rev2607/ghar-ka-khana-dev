import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full shadow-md bg-white">
      {/* Logo and tagline centered */}
      <div className="w-full flex flex-col items-center py-2 bg-white">
        <img 
          src="/logo.png" 
          alt="Ghar-Ka-Khana Logo" 
          className="h-20 w-auto object-contain mb-1"
        />
        <span className="text-xs md:text-sm font-semibold text-[#8B4513] text-center">
          Homely Food being delivered at your Home & Office
        </span>
      </div>
      {/* Nav links centered below logo/tagline, login/register on right */}
      <div className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-center relative">
          <div className="flex items-center space-x-10 py-2 mx-auto">
            <Link to="/" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Home</Link>
            <Link to="/menu" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Menu</Link>
            <Link to="/about" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">About</Link>
            <Link to="/contact" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Contact</Link>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Link to="/login" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#222] transition-colors">Login/Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
