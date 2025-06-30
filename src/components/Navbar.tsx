import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full shadow-lg bg-white border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-4 md:px-6 py-2 max-w-[1600px] mx-auto">
        {/* Left: Logo and tagline */}
        <div className="flex items-center space-x-2 md:space-x-3 min-w-[200px] md:min-w-[320px]">
          <div className="flex flex-col">
            <img 
              src="/logo.png" 
              alt="Ghar-Ka-Khana Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
            {/* Mobile-only tagline */}
            <span className="text-xs font-semibold text-black whitespace-nowrap md:hidden mt-1">
              Homely Food being delivered at your<br />Home & Office
            </span>
          </div>
          <span className="text-xs font-semibold text-black whitespace-nowrap hidden sm:block">
            Homely Food being delivered at your<br />Home & Office
          </span>
        </div>
        
        {/* Center: Launching soon banner - hidden on mobile */}
        <div className="flex-1 flex justify-center hidden md:flex">
          <CountdownTimer targetDate="2025-07-06T00:00:00" size="small" />
        </div>
        
        {/* Right: Nav links - desktop */}
        <nav className="hidden md:flex items-center space-x-4 min-w-[420px] justify-end">
          <Link to="/" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Home</Link>
          <Link to="/menu" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Menu</Link>
          <Link to="/about" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">About</Link>
          <Link to="/contact" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Contact</Link>
          <Link to="/login" className="text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors">Login/Register</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {/* Mobile countdown timer */}
            <div className="py-2 border-b border-gray-100">
              <CountdownTimer targetDate="2025-07-06T00:00:00" size="small" />
            </div>
            {/* Mobile navigation links */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md"
            >
              Menu
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md"
            >
              Login/Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
