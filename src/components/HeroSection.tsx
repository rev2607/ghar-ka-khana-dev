import CustomerReviews from './CustomerReviews';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full pt-16 pb-8 bg-gradient-to-b from-[#FFD9A0] to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-center gap-10 px-8">
        
        {/* Left Column: Food Image and Sub-headline */}
        <div className="flex flex-col items-start flex-1 flex-shrink-0 -ml-8">
          {/* Food Image with Badge */}
          <div className="relative">
            <img
              src="/food.png"
              alt="Food Tray"
              className="w-full max-w-[1100px] h-auto object-contain -rotate-6"
            />
            {/* Offer Price Badge */}
            <div
              className="absolute top-0 right-16 w-44 h-44 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center text-center z-10"
              style={{
                background: 'linear-gradient(135deg, #F47A1F 0%,rgb(202, 106, 28) 100%)',
                fontWeight: 600,
              }}
            >
              <span className="text-white text-lg md:text-xl font-semibold leading-tight">Introductory</span>
              <span className="text-white text-base md:text-lg font-semibold leading-tight mt-1">Offer Price</span>
              <span className="text-white text-4xl md:text-5xl font-bold leading-tight">59/-</span>
              <span className="text-white text-base md:text-lg leading-tight">per meal*</span>
            </div>
          </div>
          {/* Sub-headline and Reviews below food */}
          <div className="w-full mt-8 relative h-48">
            <p className="absolute top-0 left-0 text-left text-[#444] text-lg md:text-xl mt-4 max-w-md">
              Your Satisfaction, Our Highest Priority. Experience fresh, nutritious, and made with love - just like your mother's cooking.
            </p>
            <div className="absolute top-0" style={{ left: '480px' }}>
              <CustomerReviews />
            </div>
          </div>
        </div>
        
        {/* Right Column: Headline and Delivery Image */}
        <div className="flex flex-col items-start justify-start flex-1 pt-8 -ml-16">
          {/* Headline */}
          <h1 className="font-poppins font-bold text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-tight mb-8 text-left">
            <span className="block text-[#723303]">Guaranteed Taste,</span>
            <span className="block text-[#723303]">Quality, Authentic &</span>
            <span className="block text-[#F47A1F]">Hygienic Homely</span>
            <span className="block text-[#F47A1F]">Meals</span>
          </h1>
          {/* Delivery Image */}
          <div className="w-full flex justify-end relative left-12 -top-24">
            <img
              src="/delivery.png"
              alt="Delivery Woman Receiving Tiffin"
              className="w-full max-w-[480px] rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
