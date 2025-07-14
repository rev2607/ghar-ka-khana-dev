import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to check if a path is active
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full shadow-lg bg-white border-b border-gray-200">
      <div className="w-full flex items-center justify-between px-4 md:px-6 py-2 max-w-[1600px] mx-auto">
        {/* Left: Logo and tagline */}
        <div className="flex items-start md:items-center space-x-2 md:space-x-3 min-w-[200px] md:min-w-[320px]">
          <div className="flex flex-col">
            <img 
              src="/logo.png" 
              alt="Ghar-Ka-Khana Logo" 
              className="h-12 md:h-16 w-auto object-contain self-start"
            />
            {/* Mobile-only tagline */}
            <span className="text-sm font-semibold text-black md:hidden mt-3 self-start">
              Cloud Kitchen<br />
              Free Homely Food Delivery at your Home & Office
            </span>
          </div>
          <span className="text-base font-semibold text-black hidden sm:block self-start mt-2">
            Cloud Kitchen<br />
            Free Homely Food Delivery at your Home & Office
          </span>
        </div>
        
        {/* Right: Nav links - desktop */}
        <nav className="hidden md:flex items-center space-x-4 min-w-[420px] justify-end">
          <Link to="/" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/') ? 'border-b-2 border-orange-500' : ''}`}>Home</Link>
          <Link to="/menu" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/menu') ? 'border-b-2 border-orange-500' : ''}`}>Menu</Link>
          <Link to="/terms" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/terms') ? 'border-b-2 border-orange-500' : ''}`}>Before Ordering</Link>
          <Link to="/about" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/about') ? 'border-b-2 border-orange-500' : ''}`}>About</Link>
          <Link to="/contact" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/contact') ? 'border-b-2 border-orange-500' : ''}`}>Contact Us</Link>
          <Link to="/login" className={`text-[#222] text-lg font-medium hover:font-bold hover:text-[#F47A1F] transition-colors pb-1 ${isActive('/login') ? 'border-b-2 border-orange-500' : ''}`}>Login</Link>
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
            {/* Mobile navigation links */}
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md pb-1 ${isActive('/') ? 'border-b-2 border-orange-500' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md pb-1 ${isActive('/about') ? 'border-b-2 border-orange-500' : ''}`}
            >
              About
            </Link>
            <Link
              to="/menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md pb-1 ${isActive('/menu') ? 'border-b-2 border-orange-500' : ''}`}
            >
              Menu
            </Link>
            <Link
              to="/terms"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md pb-1 ${isActive('/terms') ? 'border-b-2 border-orange-500' : ''}`}
            >
              Before Ordering
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 text-base font-medium text-[#222] hover:text-[#F47A1F] hover:bg-gray-50 rounded-md pb-1 ${isActive('/contact') ? 'border-b-2 border-orange-500' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
