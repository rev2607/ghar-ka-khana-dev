import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-brand-orange text-white text-center py-2 font-bold text-lg shadow-md z-50">Launching soon in your Area</div>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div style={{marginTop: '-96px'}}>
          <FeaturesSection />
        </div>
        
        {/* Call to Action Section */}
        <section className="py-16" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 30%, #FFEFD6 70%, white 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-6">
              Ready to Experience Authentic Home-Style Cooking?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their daily meals. 
              Fresh ingredients, traditional recipes, and love in every bite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu" 
                className="bg-brand-orange text-white px-8 py-3 rounded-lg hover:bg-brand-brown transition-colors font-semibold"
              >
                View Our Menu
              </a>
              <a 
                href="/contact" 
                className="border-2 border-brand-orange text-brand-orange px-8 py-3 rounded-lg hover:bg-brand-orange hover:text-white transition-colors font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
