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
              <div className="glass-offer-card">
                <div className="glass-offer-badge">Introductory Offer</div>
                <div className="glass-offer-content">
                  <span className="glass-offer-price-label">Price =</span>
                  <span className="glass-offer-price" style={{ color: '#e11d48', background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>69/-</span>
                </div>
                <span className="glass-offer-per-meal">(Per Meal)</span>
              </div>
              <style>{`
                .glass-offer-card {
                  position: relative;
                  background: rgba(255, 255, 255, 0.25);
                  border-radius: 1rem;
                  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.18), 0 1px 4px 0 rgba(0,0,0,0.10);
                  border: 1px solid rgba(244, 122, 31, 0.25);
                  backdrop-filter: blur(8px);
                  -webkit-backdrop-filter: blur(8px);
                  padding: 1.25rem 0.75rem 1.1rem 0.75rem;
                  min-width: 6rem;
                  min-height: 6rem;
                  max-width: 175px;
                  margin: 0 auto;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-start;
                }
                .glass-offer-badge {
                  position: absolute;
                  top: -0.6rem;
                  left: 50%;
                  transform: translateX(-50%);
                  background: linear-gradient(90deg, #fbbf24 0%, #f47a1f 100%);
                  color: #fff;
                  font-weight: 700;
                  font-size: 0.5rem;
                  border-radius: 999px;
                  padding: 0.2em 0.7em;
                  box-shadow: 0 1px 4px 0 rgba(244, 122, 31, 0.10);
                  letter-spacing: 0.04em;
                  z-index: 2;
                  white-space: nowrap;
                }
                .glass-offer-content {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  margin-top: 0.9rem;
                  width: 100%;
                }
                .glass-offer-price-label {
                  color: #723303;
                  font-size: 0.75rem;
                  font-weight: 700;
                  margin-bottom: 0.1em;
                  text-align: center;
                }
                .glass-offer-price {
                  font-size: 1.6rem;
                  font-weight: 900;
                  background: linear-gradient(90deg, #f43f5e 0%, #fbbf24 100%);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  text-fill-color: transparent;
                  margin-bottom: 0.1em;
                  letter-spacing: 0.02em;
                }
                .glass-offer-per-meal {
                  background: rgba(244, 122, 31, 0.12);
                  color: #723303;
                  font-size: 0.55rem;
                  font-weight: 500;
                  border-radius: 999px;
                  padding: 0.15em 0.6em;
                  margin-top: 0.8em;
                  box-shadow: 0 0.5px 2px 0 rgba(244, 122, 31, 0.08);
                }
                @media (min-width: 768px) {
                  .glass-offer-card { padding: 1.5rem 1rem 1.25rem 1rem; max-width: 210px; }
                  .glass-offer-badge { font-size: 0.55rem; top: -0.75rem; }
                  .glass-offer-content { margin-top: 1.1rem; }
                  .glass-offer-price-label { font-size: 1rem; }
                  .glass-offer-price { font-size: 2.25rem; }
                  .glass-offer-per-meal { font-size: 0.6rem; }
                }
                @media (min-width: 1024px) {
                  .glass-offer-card { padding: 1.75rem 1.25rem 1.5rem 1.25rem; max-width: 250px; }
                  .glass-offer-badge { font-size: 0.6rem; top: -1rem; }
                  .glass-offer-content { margin-top: 1.4rem; }
                  .glass-offer-price-label { font-size: 1.2rem; }
                  .glass-offer-price { font-size: 3rem; }
                  .glass-offer-per-meal { font-size: 0.65rem; }
                }
              `}</style>
            </motion.div>
          </div>
          {/* Desktop: Why Choose block in original place */}
          <div className="w-full mt-6 md:mt-10 mb-2 md:mb-4 mx-auto hidden md:block">
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
          {/* Mobile: Why Choose block after delivery image */}
          <div className="block md:hidden w-full mt-4 mb-2 mx-auto">
            <h2 className="why-choose-block text-2xl font-bold mb-2 text-left text-[#723303]">Why Choose Neelam's Ghar-Ka-Khana?</h2>
            <div className="why-choose-block text-gray-700 max-w-4xl text-base text-left">
              <p>
                We deliver fresh, nutritious meals made with love —<br />
                just like your mother's cooking, delivered to your doorstep.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
