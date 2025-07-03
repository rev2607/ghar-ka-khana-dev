import React from 'react';
import { CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Free Home Delivery",
    description: "We provide free Home Delivery within CBD Belapur Sector 11 to 15, 19 to 23, 29 to 31.",
    icon: "🚚"
  },
  {
    title: "Quality You Can Trust",
    description: "Every meal is prepared with handpicked ingredients and cooked in premium Saffola oil — never reused or low-grade — ensuring consistent taste, health, and quality.",
    icon: (
      <img src="/oil.png" alt="Quality Oil" style={{ width: '2.2em', height: '2.2em', objectFit: 'contain', display: 'inline-block' }} />
    )
  },
  {
    title: "Sanitized Cooking Practices",
    description: "We follow strict hygiene protocols in our kitchen — everything is sanitized daily for your safety.",
    icon: "🧼"
  }
];

const FeaturesSection = () => {
  return (
    <section className="pt-0 pb-0 bg-transparent">
      <div className="container mx-auto px-4 md:px-0 mt-0 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white rounded-xl shadow-lg p-6 pt-12 text-center border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-100 border-4 border-white shadow">
                  {typeof feature.icon === 'string' ? (
                    <span className="text-3xl">{feature.icon}</span>
                  ) : (
                    feature.icon
                  )}
        </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#7C2D12]">{feature.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
