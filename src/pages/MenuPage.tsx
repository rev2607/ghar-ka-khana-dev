import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MenuPage = () => {
  const menuItems = [
    {
      name: 'Daal',
      image: '/dal.jpg'
    },
    {
      name: 'Rice',
      image: '/rice.jpg'
    },
    {
      name: 'Salad',
      image: '/salad.jpg'
    },
    {
      name: 'Sweets',
      image: '/sweets.jpg'
    },
    {
      name: 'Chapathi',
      image: '/chapathi.jpg'
    },
    {
      name: 'Bhaji',
      image: '/bhaji.jpg'
    }
  ];

  // Helper to get image for each menu item
  const getMenuItemImage = (item) => {
    if (item.toLowerCase().includes('dal') || item.toLowerCase().includes('kadi')) return '/dal.jpg';
    if (item.toLowerCase().includes('rice')) return '/rice.jpg';
    if (item.toLowerCase().includes('chapathi') || item.toLowerCase().includes('flatbread')) return '/chapathi.jpg';
    if (item.toLowerCase().includes('bhaji')) return '/bhaji.jpg';
    if (item.toLowerCase().includes('salad')) return '/salad.jpg';
    if (item.toLowerCase().includes('sweets')) return '/sweets.jpg';
    if (item.toLowerCase().includes('chicken curry')) return '/chicken.jpg';
    if (item.toLowerCase().includes('papad')) return '/sweets.jpg';
    if (item.toLowerCase().includes('pickle')) return '/sweets.jpg';
    if (item.toLowerCase().includes('complimentary')) return '/sweets.jpg';
    return '/sweets.jpg';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-8 md:py-12" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 md:mb-4">Our Menu</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Enjoy our delicious and affordable meal plans, prepared fresh daily with the best ingredients.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to bottom, #FFEFD6 0%, white 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Menu Plans Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-6 md:my-8">
                {/* Veg Normal Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2 text-center">(Veg Normal) <span className="font-normal">Rate 75/-</span></h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-xs space-y-2">
                    {[
                      '3 Chapathis',
                      'Rice',
                      '1 Bhaji',
                      '1 Dal/Dahi Kadi',
                      'Salad / Pickle / Papad',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto">
                    <table className="w-full text-xs md:text-sm text-left border-t border-gray-200">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Weekly</td>
                          <td>354/- 1st week, then 450/-</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Monthly</td>
                          <td>1950/-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Veg Special Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2 text-center">(Veg Special) <span className="font-normal">Rate 85/-</span></h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-xs space-y-2">
                    {[
                      '2 Chapathis + Special FlatBread',
                      'Rice',
                      '1 Bhaji',
                      '1 Dal/Dahi Kadi',
                      'Salad / Pickle / Papad',
                      'Complimentary',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto">
                    <table className="w-full text-xs md:text-sm text-left border-t border-gray-200">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Weekly</td>
                          <td>510/-</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Monthly</td>
                          <td>2210/-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Chicken Meal Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2 text-center">(Chicken Meal) <span className="font-normal">Rate 110/-</span></h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-xs space-y-2">
                    {[
                      '3 Chapathis',
                      'Rice',
                      'Chicken Curry',
                      'Salad',
                      'Complimentary',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span className={item === 'Chicken Curry' ? 'text-red-600 font-bold' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto">
                    <table className="w-full text-xs md:text-sm text-left border-t border-gray-200">
                      <tbody>
                        <tr>
                          <td className="font-semibold">Weekly</td>
                          <td>660/-</td>
                        </tr>
                        <tr>
                          <td className="font-semibold">Monthly</td>
                          <td>2860/-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-brown mb-4 md:mb-6">Want to Order?</h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us to place your order and enjoy authentic home-style meals delivered fresh to your doorstep.
            </p>
            <a 
              href="/contact" 
              className="bg-brand-orange text-white px-6 md:px-8 py-3 rounded-lg hover:bg-brand-brown transition-colors font-semibold inline-block"
            >
              Contact Us to Order
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
