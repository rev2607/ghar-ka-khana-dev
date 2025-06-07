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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-brand-lightOrange to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">Our Menu</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Enjoy our delicious and affordable meal plans, prepared fresh daily with the best ingredients.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Veg Special Plan */}
              <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-xl border border-yellow-100 p-6 mb-8">
                {/* Price Plan Badge */}
                <div className="flex flex-col items-center mb-8">
                  <span className="inline-block bg-yellow-400 text-white font-bold text-lg px-5 py-2 rounded-full shadow mb-2">
                    ₹85/- per meal
                  </span>
                  <div className="flex gap-2 text-sm">
                    <span className="bg-yellow-100 text-brand-brown px-3 py-1 rounded-full font-semibold">Weekly: ₹510/-</span>
                    <span className="bg-yellow-100 text-brand-brown px-3 py-1 rounded-full font-semibold">Monthly: ₹2210/-</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                    <span className="text-lg">🥗</span> Veg Special
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-brand-brown mb-6 text-center">Veg Special Meal</h2>
                
                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuItems.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-w-16 aspect-h-9">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-brand-brown">{item.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Introductory Offer Note */}
                <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-100">
                  <p className="text-center text-sm text-orange-800 font-medium">
                    <span className="font-bold">Note:</span> After 1st Weekly Introductory offer, price will be usual charges as following
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand-brown mb-6">Want to Order?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us to place your order and enjoy authentic home-style meals delivered fresh to your doorstep.
            </p>
            <a 
              href="/contact" 
              className="bg-brand-orange text-white px-8 py-3 rounded-lg hover:bg-brand-brown transition-colors font-semibold inline-block"
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
