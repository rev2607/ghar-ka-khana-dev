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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-brown mb-3 md:mb-4">Terms and Conditions</h1>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8">
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      By accessing and using Ghar-Ka-Khana services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">2. Service Description</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                      Ghar-Ka-Khana provides home-cooked meal delivery services within specified areas. Our services include:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 ml-4">
                      <li>Fresh, home-cooked vegetarian and non-vegetarian meals</li>
                      <li>Daily meal delivery services</li>
                      <li>Weekly and monthly subscription plans</li>
                      <li>Free home delivery within specified areas</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">3. Order and Payment Terms</h2>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Pricing:</strong> All prices are in Indian Rupees (₹) and are subject to change without prior notice. Introductory offers are valid only for the first week of subscription.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Payment:</strong> Payment is required at the time of order placement. We accept cash on delivery and online payment methods.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Cancellation:</strong> Orders can be cancelled up to 24 hours before delivery. No refunds for same-day cancellations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">4. Delivery Terms</h2>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Delivery Areas:</strong> We currently serve CBD Belapur Sector 11 to 15, 19 to 23, 29 to 31. Delivery outside these areas may incur additional charges.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Delivery Times:</strong> Day delivery between 11:00 AM - 1:30 PM, Night delivery between 7:00 PM - 9:30 PM.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Delivery Charges:</strong> Free delivery within specified areas. Additional charges may apply for extended areas.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">5. Food Quality and Safety</h2>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Quality Assurance:</strong> We maintain the highest standards of food quality and hygiene. All ingredients are fresh and sourced from trusted suppliers.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Allergen Information:</strong> Please inform us of any food allergies or dietary restrictions at the time of ordering.
                      </p>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        <strong>Storage:</strong> Meals should be consumed within 2-3 hours of delivery for best quality and safety.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">6. Customer Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-1 ml-4">
                      <li>Provide accurate delivery address and contact information</li>
                      <li>Ensure someone is available to receive the delivery</li>
                      <li>Check food quality upon delivery and report any issues immediately</li>
                      <li>Follow storage and consumption guidelines</li>
                      <li>Respect delivery personnel and maintain courteous behavior</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">7. Limitation of Liability</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      Ghar-Ka-Khana shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of our services. Our total liability shall not exceed the amount paid for the specific order.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">8. Privacy Policy</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      We respect your privacy and are committed to protecting your personal information. Your data is used solely for order processing and delivery purposes and will not be shared with third parties without your consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">9. Changes to Terms</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of the modified terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-brand-brown mb-3">10. Contact Information</h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      For any questions regarding these terms and conditions, please contact us at:
                    </p>
                    <div className="mt-3 text-gray-700 text-sm md:text-base">
                      <p><strong>Address:</strong> Shop 2, Plot Y5, Sector 19, Shahbaaz Gaon, CBD Belapur, Navi Mumbai 400614</p>
                      <p><strong>Phone:</strong> +91 8108 325 444</p>
                    </div>
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