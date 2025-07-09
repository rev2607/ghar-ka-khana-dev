import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Add custom style for no-spacing-table
const noSpacingTableStyle = `
  .no-spacing-table {
    border-spacing: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .no-spacing-table td, .no-spacing-table tr, .no-spacing-table tbody {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

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
    const lower = item.toLowerCase();
    if (lower.includes('dal') || lower.includes('kadi')) return '/dal.jpg';
    if (lower.includes('rice')) return '/rice.jpg';
    if (lower.includes('chapathi') || lower.includes('chapathis') || lower.includes('flatbread') || lower.includes('puri')) return '/chapathi.jpg';
    if (lower.includes('bhaji')) return '/bhaji.jpg';
    if (lower.includes('aloo-kobi') || lower.includes('pattha kobi') || lower.includes('kobi')) return '/salad.jpg'; // Use salad.jpg as a placeholder for cabbage/cauliflower
    if (lower.includes('salad') || lower.includes('salaad')) return '/salad.jpg';
    if (lower.includes('sweets') || lower.includes('desert')) return '/sweets.jpg';
    if (lower.includes('chicken masala') || lower.includes('chicken curry')) return '/chicken.jpg';
    if (lower.includes('papad')) return '/salad.jpg';
    if (lower.includes('pickle')) return '/salad.jpg';
    if (lower.includes('complimentary')) return '/sweets.jpg';
    return '/sweets.jpg';
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
      <Navbar />
      <main className="flex-grow">
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 md:mb-4">Our Menu</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Enjoy our delicious and affordable meal plans, prepared fresh daily with the best ingredients.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-6 text-center">Our Plans</h2>
            <div className="max-w-6xl mx-auto">
              {/* Menu Plans Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 my-6 md:my-8">
                {/* Veg Promo Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2 text-center">(Veg Promo) Price ₹69</h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-sm space-y-2">
                    {[
                      '3 Chapathi',
                      'Rice',
                      '1 Bhaji',
                      '1 Dal/Kadi',
                      'Salad/Papad/Pickle',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mb-2 text-xs md:text-sm text-left text-yellow-900 bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1">1 Week, only 1 Time offer</div>
                  <div className="w-full max-w-xs mb-2 bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1 text-yellow-900">
                    <table className="w-full text-xs md:text-sm text-left no-spacing-table">
                      <tbody>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Weekly <span className='font-normal'>(one-time offer)</span></td><td className="p-0 align-top">₹414</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Veg Normal Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2 text-center">(Veg Normal) Price ₹75</h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-sm space-y-2">
                    {[
                      'Chapathis',
                      'Rice',
                      'Bhaji',
                      'Dal/Kadi',
                      'Salad/Papad/Pickle',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1 text-yellow-900">
                    <table className="w-full text-xs md:text-sm text-left no-spacing-table">
                      <tbody>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">One-Day Takeaway</td><td className="p-0 align-top">₹85</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Weekly</td><td className="p-0 align-top">₹450</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Monthly</td><td className="p-0 align-top">₹1825</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Veg Special Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-green-600 mb-2 text-center">(Veg Special) Price ₹85</h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-sm space-y-2">
                    {[
                      'Chapathis (May be combined)',
                      'Rice',
                      'Bhaji',
                      'Dal/Kadi',
                      'Salad/Papad/Pickle',
                      'Compliment',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1 text-yellow-900">
                    <table className="w-full text-xs md:text-sm text-left no-spacing-table">
                      <tbody>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">One-Day Takeaway</td><td className="p-0 align-top">₹95</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Weekly</td><td className="p-0 align-top">₹510</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Monthly</td><td className="p-0 align-top">₹2075</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Non-Veg Normal Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-red-600 mb-2 text-center">Combo Normal NV + Veg</h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-sm space-y-2">
                    {[
                      'Chapathi',
                      'Rice',
                      'Special Chicken Curry',
                      'Salad/Papad/Pickle',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span className={item.includes('Chicken') ? 'text-red-600 font-bold' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1 text-yellow-900">
                    <table className="w-full text-xs md:text-sm text-left no-spacing-table">
                      <tbody>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Weekly</td><td className="p-0 align-top">₹485</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Monthly</td><td className="p-0 align-top">₹1965</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Non-Veg Special Plan */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center">
                  <h3 className="text-lg md:text-xl font-bold text-red-700 mb-2 text-center">Combo Special NV + Veg</h3>
                  <ul className="text-gray-800 text-sm md:text-base mb-4 text-left w-full max-w-sm space-y-2">
                    {[
                      'Chapathi',
                      'Rice',
                      'Special Chicken Curry',
                      'Salad/Papad/Pickle',
                      'Compliment',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <img src={getMenuItemImage(item)} alt="" className="w-6 h-6 md:w-7 md:h-7 rounded object-cover border border-gray-200" />
                        <span className={item.includes('Chicken') ? 'text-red-700 font-bold' : ''}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-full max-w-xs mt-auto bg-yellow-50 border-l-4 border-yellow-400 rounded px-2 py-1 text-yellow-900">
                    <table className="w-full text-xs md:text-sm text-left no-spacing-table">
                      <tbody>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Weekly</td><td className="p-0 align-top">₹545</td></tr>
                        <tr className="align-top p-0"><td className="font-semibold p-0 align-top">Monthly</td><td className="p-0 align-top">₹2215</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Coming Soon Card */}
                <div className="bg-white rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)] p-4 md:p-6 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-600 mb-2">More plans are coming soon</h3>
                    <div className="text-gray-500 text-sm md:text-base">
                      Stay tuned for exciting new meal options!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto my-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded text-yellow-900 text-base md:text-lg">
          <strong>Note:</strong><br />
          1. Bhaji will change daily — enjoy a mix of homely seasonal curries throughout the month!<br />
          2. One Time Refundable Security Deposit 299/- to be paid towards Tiffin Box<br />
          3. Promo plans are one-time offers only.<br />
          4. No service on Sundays or public holidays.<br />
          5. Weekly = 6 days, Monthly = 25 days.<br />
          6. Combo pack have 1 day (Wednesday) Chicken and remaining 5 days Veg
        </div>

        <section className="py-8 md:py-16">
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
      <style>{noSpacingTableStyle}</style>
    </div>
  );
};

export default MenuPage;
