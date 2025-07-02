import CustomerReviews from './CustomerReviews';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="w-full pt-8 md:pt-16 pb-8 bg-gradient-to-b from-[#FFD9A0] to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-6 md:gap-10 lg:gap-x-20 px-4 md:px-8">
        
        {/* Left Column: Food Image and Sub-headline */}
        <div className="flex flex-col items-start flex-1 flex-shrink-0 -ml-0 md:-ml-8 order-1 lg:order-1">
          {/* Food Image with Badge */}
          <div className="relative w-full">
            <img
              src="/food.png"
              alt="Food Tray"
              className="w-full max-w-[1600px] h-auto object-contain -rotate-0 md:-rotate-6"
            />
            {/* Offer Price Glassmorphism Card */}
            <motion.div
              className="absolute top-0 right-8 md:right-16 flex flex-col items-center justify-center text-center z-10 px-8 py-6 rounded-2xl border border-orange-300 shadow-xl backdrop-blur-md bg-white/60"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
              style={{ minWidth: '8rem', minHeight: '8rem' }}
            >
              <span className="text-orange-700 text-sm md:text-lg lg:text-xl font-semibold leading-tight">Introductory</span>
              <span className="text-orange-900 text-xs md:text-base lg:text-lg font-semibold leading-tight mt-1">Offer Price</span>
              <span className="text-orange-600 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">59/-</span>
              <span className="text-orange-800 text-xs md:text-base lg:text-lg leading-tight">per meal*</span>
            </motion.div>
          </div>
          {/* Why Choose Title and Description */}
          <div className="w-full mt-6 md:mt-10 mb-2 md:mb-4 mx-auto">
            <style>{`
              @media (min-width: 1024px) {
                .why-choose-block { max-width: 520px; }
              }
            `}</style>
            <h2 className="why-choose-block text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-left text-[#723303] whitespace-nowrap">Why Choose Neelam's Ghar-Ka-Khana?</h2>
            <div className="why-choose-block text-gray-700 max-w-4xl text-base md:text-lg text-left">
              <p>
                We're more than just a food service — we deliver fresh, nutritious meals made with love, just like your mother's cooking,<br />
                right to your doorstep.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Column: Headline and Delivery Image */}
        <div className="flex flex-col items-start justify-start flex-1 pt-4 md:pt-8 -ml-0 md:-ml-16 order-2 lg:order-2">
          {/* Headline */}
          <h1 className="font-poppins font-bold text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] leading-tight mb-4 md:mb-8 text-left">
            <span className="block text-[#723303]">Guaranteed Taste,</span>
            <span className="block text-[#723303]">Quality, Authentic &</span>
            <span className="block text-[#F47A1F]">Hygienic Homely</span>
            <span className="block text-[#F47A1F]">Meals</span>
          </h1>
          {/* Delivery Image */}
          <div className="w-full flex justify-center md:justify-end relative left-0 md:left-4 -top-0 md:-top-24 mb-6 md:mb-0">
            <img
              src="/delivery.png"
              alt="Delivery Woman Receiving Tiffin"
              className="w-full max-w-[300px] md:max-w-[480px] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
