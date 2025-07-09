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
        
        {/* Call to Action Section */}
        <section className="py-8 md:py-16" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 30%, #FFEFD6 70%, white 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-brown mb-4 md:mb-6">
              Ready to Experience Authentic Home-Style Cooking?
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily meals. 
              Fresh ingredients, traditional recipes, and love in every bite.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Link 
                to="/menu" 
                className="bg-brand-orange text-white px-6 md:px-8 py-3 rounded-lg hover:bg-brand-brown transition-colors font-semibold"
              >
                View Our Menu
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-brand-orange text-brand-orange px-6 md:px-8 py-3 rounded-lg hover:bg-brand-orange hover:text-white transition-colors font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-brand-brown py-3 md:py-4">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white text-xs md:text-sm">
              Disclaimer: * = 69/- is the Introductory offer for 1st 1 week order only; there by charges will be as per Menu
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
