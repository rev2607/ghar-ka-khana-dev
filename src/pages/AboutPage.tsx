
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-gradient-to-r from-brand-lightOrange to-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the story behind Neelam Ghar Ka Khana and our mission to bring authentic home-cooked meals to your doorstep.
            </p>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-brown mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Neelam Ghar Ka Khana was founded in 2020 by Neelam Sharma, a passionate home cook who wanted to share her love for traditional Indian cuisine with busy professionals who missed the taste of home-cooked food.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small kitchen serving a handful of customers in the neighborhood has now grown into a beloved tiffin service across Mumbai, delivering hundreds of meals daily without compromising on quality or taste.
              </p>
              <p className="text-gray-700">
                Our recipes have been passed down through generations, and we take pride in preparing each meal with the same care and attention as we would for our own family.
              </p>
            </div>
            <div className="bg-brand-orange/10 h-72 rounded-lg flex items-center justify-center">
              <div className="text-center p-6">
                <span className="text-5xl mb-4 block">👩‍🍳</span>
                <h3 className="text-xl font-medium text-brand-brown">Neelam Sharma</h3>
                <p className="text-gray-600">Founder & Head Chef</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-brand-brown mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-brand-lightOrange w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Quality Ingredients</h3>
                    <p className="text-gray-600">
                      We source the freshest ingredients from local markets and trusted suppliers to ensure the best flavors in every meal.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-brand-lightOrange w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">❤️</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Cooked with Love</h3>
                    <p className="text-gray-600">
                      Each meal is prepared with care and attention to detail, just as you would expect from your family kitchen.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="bg-brand-lightOrange w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl">🕒</span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-brown mb-2">Reliability</h3>
                    <p className="text-gray-600">
                      We understand the importance of timely meals, which is why we ensure punctual delivery every single day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-brown mb-6">Join Our Community</h2>
            <p className="text-gray-700 mb-8">
              When you subscribe to Neelam Ghar Ka Khana, you're not just getting meals delivered; you're becoming part of our extended family. Experience the comfort of home-cooked food without the hassle of preparation.
            </p>
            <div className="bg-brand-brown text-white p-6 rounded-lg">
              <p className="text-lg italic">
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
