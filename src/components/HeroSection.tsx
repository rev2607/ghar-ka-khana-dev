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
              className="w-full max-w-[4000px] h-auto object-contain scale-150 -rotate-0 md:-rotate-6 mt-8 md:mt-12"
            />
            {/* Offer Price Glassmorphism Card */}
            <motion.div
              className="absolute top-0 right-8 md:right-16 flex flex-col items-center justify-center text-center z-10 px-8 py-6 rounded-2xl border border-orange-300 shadow-xl backdrop-blur-md bg-white/60 ml-72 md:ml-[32rem] mt-[-2rem] md:mt-[-3rem]"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: 'spring' }}
              whileHover={{ scale: 1.05 }}
              style={{ minWidth: '8rem', minHeight: '8rem' }}
            >
              <div className="font-bold text-[#fff] bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 rounded-full mb-2 whitespace-nowrap">Introductory Offer</div>
              <div className="flex flex-row items-end gap-2 justify-center mb-1 whitespace-nowrap">
                <span className="text-[#723303] text-lg md:text-xl font-bold">Price =</span>
                <span className="text-[#e11d48] text-3xl md:text-5xl font-extrabold">69/-</span>
              </div>
              <div className="text-[#723303] text-base md:text-lg font-medium bg-orange-100 rounded-full px-3 py-1 mt-1">(Per Meal)</div>
            </motion.div>
          </div>
          {/* Desktop: Why Choose block in original place */}
          <div className="w-full mt-24 md:mt-32 mb-2 md:mb-4 mx-auto hidden md:block">
            <style>{`
              @media (min-width: 1024px) {
                .why-choose-block { max-width: 520px; }
              }
            `}</style>
            <h2 className="why-choose-block text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-left text-[#723303] md:whitespace-nowrap">Why Choose Neelam's Ghar-Ka-Khana?</h2>
            {/* Removed the paragraph about delivering fresh, nutritious meals */}
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
          {/* Delivery Driver Image (red box area) */}
          <div className="absolute hidden md:block" style={{ top: '500px', right: '630px', width: '360px', height: '280px', zIndex: 5 }}>
            <img src="/driver.png" alt="Delivery Driver" className="w-full h-full object-contain rounded-xl" />
          </div>
          {/* Mobile: Why Choose block after delivery image */}
          <div className="block md:hidden w-full mt-4 mb-2 mx-auto">
            <h2 className="why-choose-block text-2xl font-bold mb-2 text-left text-[#723303]">Why Choose Neelam's Ghar-Ka-Khana?</h2>
            {/* Show driver.png on mobile below the heading */}
            <div className="w-full flex justify-center my-4">
              <img src="/driver.png" alt="Delivery Driver" className="w-40 h-auto rounded-xl shadow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
