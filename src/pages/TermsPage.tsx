import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-8 md:py-12" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 md:mb-4">Before Ordering, Make a Note:</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Please read these important points carefully before using our services.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                
                <div className="space-y-6">
                  <ul className="text-left text-gray-800 text-sm md:text-base leading-relaxed space-y-3 pl-2">
                    <li>* <b>All orders must be placed at least 24 hours in advance</b> to ensure timely preparation and delivery.</li>
                    <li>* Full payment must be made 100% in advance at the time of booking.</li>
                    <li>* Tiffin delivery will be provided <b>only up to the 1st floor</b> of any building. Customers on higher floors are requested to coordinate accordingly.</li>
                    <li>* Customers are required to return the previous day's <b>empty tiffin</b> box at the time of receiving the new one.</li>
                    <li>* <b>Service Days:</b> 25 Days is for a Month Package & 6 Days for a Week Package; This excludes Sundays and Public Holidays.</li>
                    <li>* Refer to the <b>Holidays list</b> in "About" section on our website for the full list of non-service days.</li>
                    <li>* <b>Delivery Timings:</b> Lunch: 11:00 AM – 1:30 PM & Dinner: 7:00 PM – 9:30 PM</li>
                    <li>* In case <b>if company is unable to deliver</b> on a scheduled day, the same will be intimated in advance & will compensate the meal by extending the service period accordingly.</li>
                    <li>* Tiffin packages are available on a <b>Weekly, Monthly Subscription & Walk-In Take-Away</b> (From Cloud Kitchen Location) basis.</li>
                  </ul>
                  <div className="border-t pt-6">
                    <p className="text-gray-600 text-sm text-center">
                      <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage; 