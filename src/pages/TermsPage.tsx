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
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">1. Advance Order Requirement</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      All orders must be placed at least 24 hours in advance to ensure timely preparation and delivery.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">2. Available Plans & Pickup Option</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Tiffin packages are available on a Weekly or Monthly subscription basis.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Takeaway — Customers may collect their tiffin directly from our Cloud Kitchen location.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      <strong>Note:</strong> Daily individual orders will soon be available via online platforms like Zomato and Swiggy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">3. Payment Policy</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Full payment must be made 100% in advance at the time of booking.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">4. Tiffin Box Exchange Policy</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Customers are required to return the previous day's empty tiffin box at the time of receiving the new one. This helps maintain hygiene and operational efficiency.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">5. Delivery Timings</h2>
                    <div className="space-y-2">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Lunch:</strong> 11:00 AM – 1:30 PM
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Dinner:</strong> 7:00 PM – 9:30 PM
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">6. Service Days in Monthly Plan</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      A monthly plan includes 25 service days, excluding Sundays and Public Holidays.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Refer to the Holidays section on our website for the full list of non-service days.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">7. Company-Initiated Cancellations</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      In case the company is unable to deliver on a scheduled day, we will compensate by extending the service period accordingly.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">8. Delivery Access</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Tiffin delivery will be provided only up to the 1st floor of any building. Customers on higher floors are requested to coordinate accordingly.
                    </p>
                  </div>

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