import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-8 md:py-12" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 md:mb-4">About Us</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the vision behind Ghar-Ka-Khana, a proud initiative under the future umbrella of Neelam's Group of Industries, dedicated to delivering authentic home-cooked meals with love, care, and the highest standards.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-4 md:mb-6">Our Story</h2>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                Ghar-Ka-Khana is a subsidiary of the upcoming Neelam's Group of Industries, officially launching on 29th June, 2025. Founded by Biju Neelam — the Founder, CEO, CTO & Head — the venture is built with a commitment to providing Quality, Authentic, Hygienic, and Homely-Made Food Meal Products to customers across the city.
              </p>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                What began as a humble vision has grown into a dependable tiffin service delivering daily meals that bring comfort and nutrition to every doorstep. Our brand stands firm on the promise of highest customer satisfaction, using recipes crafted with care and ingredients sourced for freshness and quality.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Whether you're a busy professional, a student, or simply missing the taste of home, Ghar-Ka-Khana brings the warmth of a home-cooked meal straight to you — with love and responsibility.
              </p>
            </div>
            <div className="bg-brand-orange/10 h-56 md:h-72 rounded-lg flex items-center justify-center">
              <div className="text-center p-4 md:p-6">
                <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">👨‍💼</span>
                <h3 className="text-lg md:text-xl font-medium text-brand-brown">Biju Neelam</h3>
                <p className="text-gray-600 text-sm md:text-base">Founder, CEO & CTO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to bottom, #FFEFD6 0%, white 100%)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-6 md:mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <Card className="rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <CardContent className="pt-4 md:pt-6">
                  <div className="text-center">
                    <div className="bg-[#FFEFD6] w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl">🌱</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#7C2D12] mb-2">Quality Ingredients</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      We source the freshest ingredients from local markets and trusted suppliers to ensure the best flavors in every meal.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <CardContent className="pt-4 md:pt-6">
                  <div className="text-center">
                    <div className="bg-[#FFEFD6] w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl">❤️</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#7C2D12] mb-2">Cooked with Love</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Each meal is prepared with care and attention to detail, just as you would expect from your family kitchen.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                <CardContent className="pt-4 md:pt-6">
                  <div className="text-center">
                    <div className="bg-[#FFEFD6] w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full flex items-center justify-center mb-3 md:mb-4">
                      <span className="text-xl md:text-2xl">🕒</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-[#7C2D12] mb-2">Reliability</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      We understand the importance of timely meals, which is why we ensure punctual delivery every single day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to bottom, #FFEFD6 0%, white 100%)' }}>
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-6 md:mb-10 text-center">Holidays (No Service Days)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm md:text-base mx-auto bg-white rounded-lg">
                <thead>
                  <tr className="bg-brand-brown text-white">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Day</th>
                    <th className="p-2 border">Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2 border">January 1</td><td className="p-2 border">Wednesday</td><td className="p-2 border">New Year</td></tr>
                  <tr><td className="p-2 border">January 14</td><td className="p-2 border">Tuesday</td><td className="p-2 border">Sankranti</td></tr>
                  <tr><td className="p-2 border">March 14</td><td className="p-2 border">Friday</td><td className="p-2 border">Holi</td></tr>
                  <tr><td className="p-2 border">March 31</td><td className="p-2 border">Monday</td><td className="p-2 border">Id-Ul-Fitr</td></tr>
                  <tr><td className="p-2 border">April 14</td><td className="p-2 border">Monday</td><td className="p-2 border">Ambedkar Jayanti</td></tr>
                  <tr><td className="p-2 border">May 12</td><td className="p-2 border">Monday</td><td className="p-2 border">Buddha Purnima</td></tr>
                  <tr><td className="p-2 border">August 9</td><td className="p-2 border">Saturday</td><td className="p-2 border">Raksha Bandhan</td></tr>
                  <tr><td className="p-2 border">August 15</td><td className="p-2 border">Friday</td><td className="p-2 border font-bold">Independence Day</td></tr>
                  <tr><td className="p-2 border">October 2</td><td className="p-2 border">Thursday</td><td className="p-2 border font-bold">Gandhi Jayanti</td></tr>
                  <tr><td className="p-2 border">October 20</td><td className="p-2 border">Monday</td><td className="p-2 border">Diwali</td></tr>
                  <tr><td className="p-2 border">Dec-25</td><td className="p-2 border">Thursday</td><td className="p-2 border">Christmas</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-16 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-brown mb-4 md:mb-6">Join Our Community</h2>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              When you subscribe to Neelam Ghar Ka Khana, you're not just getting meals delivered; you're becoming part of our extended family. Experience the comfort of home-cooked food without the hassle of preparation.
            </p>
            <div className="bg-brand-brown text-white p-4 md:p-6 rounded-lg">
              <p className="text-base md:text-lg italic">
                "Food brings people together on many different levels. It's the universal connector that reminds us of home."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
