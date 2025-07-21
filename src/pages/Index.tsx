import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Thin shadow effect below navbar */}
      <div className="w-full h-[2px] -mb-[2px] z-20 relative">
        <div className="w-full h-full mx-auto" style={{boxShadow: '0 6px 16px 0 rgba(0,0,0,0.18), 0 2px 4px 0 rgba(0,0,0,0.12)'}} />
      </div>
      <main className="flex-grow">
        <HeroSection />
        <div style={{marginTop: '-32px'}} className="md:-mt-16">
          <FeaturesSection />
        </div>
        
        {/* Disclaimer Section */}
        <section className="bg-brand-brown py-3 md:py-4 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-xs md:text-sm">
              Disclaimer: * = 75/- is the Introductory offer for 1st 1 week order only; there by charges will be as per Menu
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
