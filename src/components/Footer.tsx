
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/4604ffb0-30c8-4a7e-a18f-49882378f1da.png" 
                alt="Ghar-Ka-Khana Neelam's" 
                className="h-10"
              />
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Delicious home-cooked meals delivered to your doorstep daily. Taste the love in every bite.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-orange text-sm">About Us</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-brand-orange text-sm">Our Menu</Link></li>
              <li><Link to="/subscription" className="text-gray-600 hover:text-brand-orange text-sm">Subscription Plans</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-orange text-sm">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="mr-2 text-brand-orange" />
                Shop 2, Plot Y5, Sector 19, Shahbaaz Gaon, CBD Belapur, Navi Mumbai 400614
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Phone size={16} className="mr-2 text-brand-orange" />
                +91 8108-325-444
              </li>
              <li className="flex items-center text-gray-600 text-sm">
                <Mail size={16} className="mr-2 text-brand-orange" />
                info@neelamghar.com
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div className="md:col-span-1">
            <h3 className="font-medium text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Monday to Saturday</li>
              <li className="text-gray-600 text-sm">Day Delivery 11AM to 1.30PM</li>
              <li className="text-gray-600 text-sm">Night Delivery 7PM to 9.30PM</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Neelam Ghar Ka Khana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
