import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full pt-16 pb-2 bg-gradient-to-b from-[#FFD9A0] to-white">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between gap-10 px-8 relative min-h-[460px] md:min-h-[570px] lg:min-h-[660px]">
        {/* Left: Headline, Subheadline */}
        <div className="flex flex-col justify-start flex-1 min-w-[350px] px-0 md:px-0 text-left z-20 ml-[-32px]">
          <h1 className="font-poppins font-bold text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.08] mb-3 text-left">
            <span className="block text-[#723303] whitespace-nowrap">Guaranteed Taste,</span>
            <span className="block text-[#723303] whitespace-nowrap">Quality, Authentic &</span>
            <span className="block text-[#F47A1F] whitespace-nowrap">Hygienic Homely</span>
            <span className="block text-[#F47A1F] whitespace-nowrap">Meals</span>
          </h1>
          <p className="text-left text-[#444] text-xl md:text-2xl mt-3 mb-5 max-w-2xl">
            Your Satisfaction, Our Highest Priority. Experience fresh, nutritious, and made with love - just like your mother's cooking.
          </p>
        </div>
        {/* Images Layered: Delivery in back, Food in front, Badge on food */}
        <div className="flex-1 relative min-w-[374px] min-h-[374px] flex items-end justify-end">
          {/* Delivery Image (background, top right) */}
          <img
            src="/delivery.png"
            alt="Delivery Woman Receiving Tiffin"
            className="absolute top-0 right-0 w-[286px] md:w-[374px] lg:w-[440px] rounded-2xl object-cover shadow-lg z-10"
            style={{ zIndex: 10 }}
          />
          {/* Food Image (foreground, bottom left) */}
          <div className="relative z-20" style={{ width: 'min(100%, 484px)' }}>
            <img
              src="/food.png"
              alt="Food Tray"
              className="w-[286px] md:w-[374px] lg:w-[484px] h-auto object-contain rotate-[-8deg] relative z-20"
              style={{ marginTop: '242px', marginLeft: '-242px' }}
            />
            {/* Offer Price Badge - overlaps top left of food image */}
            <div
              className="absolute -top-10 -left-24 w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full flex flex-col items-center justify-center text-center z-30"
              style={{
                background: 'linear-gradient(135deg, #F47A1F 0%,rgb(202, 106, 28) 100%)',
                fontWeight: 600,
              }}
            >
              <span className="text-white text-base md:text-lg font-semibold mb-0.5 leading-tight">Introductory</span>
              <span className="text-white text-2xl md:text-2xl font-bold leading-tight">Offer Price 59/-</span>
              <span className="text-white text-sm md:text-base mt-0.5 leading-tight">per meal*</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
