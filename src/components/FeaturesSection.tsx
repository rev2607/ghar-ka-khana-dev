import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: "Free Home Delivery",
    description: "We provide free Home Delivery within CBD Belapur Sector 11 to 15, 19 to 23, 29 to 31.",
    icon: "🚚"
  },
  {
    title: "Quality Guaranteed",
    description: "Every meal is carefully prepared with handpicked ingredients, ensuring consistent quality and taste.",
    icon: "🛡️"
  },
  {
    title: "Sanitized Cooking Practices",
    description: "We follow strict hygiene protocols in our kitchen — everything is sanitized daily for your safety.",
    icon: "🧼"
  },
  {
    title: "Quality Oil Used",
    description: "We cook using premium oils only — no reused or low-grade oils, ensuring better health and taste.",
    icon: "🥥"
  }
];

const FeaturesSection = () => {
  return (
    <section className="pt-0 pb-0 bg-transparent">
      <div className="container mx-auto px-4 md:px-0 mt-0 pt-0">
        <div className="text-center mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">Why Choose Neelam's Ghar-Ka-Khana?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4 md:px-0">
            We're not just another food delivery service. We bring home-cooked meals made with love and care directly to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 my-6 md:my-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-black flex flex-row items-start gap-3 md:gap-6 hover:shadow-lg transition-shadow">
              <div className="text-2xl md:text-3xl lg:text-4xl mr-1 md:mr-2 mt-1">{feature.icon}</div>
              <div>
                <CardTitle className="text-base md:text-lg font-bold text-[#7C2D12] mb-1">{feature.title}</CardTitle>
                <CardDescription className="text-sm md:text-base text-[#374151]">{feature.description}</CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
