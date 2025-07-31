import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Clock, CreditCard, MapPin, Package, Calendar, AlertCircle, Info, XCircle } from 'lucide-react';

const TermsPage = () => {
  const terms = [
    {
      icon: Clock,
      title: "Advance Booking Required",
      content: "All orders must be placed at least 24 hours in advance to ensure timely preparation and delivery."
    },
    {
      icon: CreditCard,
      title: "Full Payment in Advance",
      content: "Full payment must be made 100% in advance at the time of booking."
    },
    {
      icon: MapPin,
      title: "Delivery Limitations",
      content: "Tiffin delivery will be provided only up to the 1st floor of any building. Customers on higher floors are requested to coordinate accordingly."
    },
    {
      icon: Package,
      title: "Tiffin Box Return Policy",
      content: "Customers are required to return the previous day's empty tiffin box at the time of receiving the new one."
    },
    {
      icon: Calendar,
      title: "Service Days",
      content: "25 Days is for a Month Package & 6 Days for a Week Package; This excludes Sundays and Public Holidays."
    },
    {
      icon: Info,
      title: "Holiday Schedule",
      content: "Refer to the Holidays list in 'About' section on our website for the full list of non-service days."
    },
    {
      icon: Clock,
      title: "Delivery Timings",
      content: "Lunch: 11:00 AM – 1:30 PM & Dinner: 7:00 PM – 9:30 PM"
    },
    {
      icon: AlertCircle,
      title: "Service Interruption Policy",
      content: "In case if company is unable to deliver on a scheduled day, the same will be intimated in advance & will compensate the meal by extending the service period accordingly."
    },
    {
      icon: Package,
      title: "Package Options",
      content: "Tiffin packages are available on a Weekly, Monthly Subscription & Walk-In Take-Away (From Cloud Kitchen Location) basis."
    },
    {
      icon: Package,
      title: "Rajma-Rice Special Note",
      content: "Considering Rajma-Rice being very Famous Indian Dish Combination, 'When there is a Rajma; Chapathi would be reduced to two and Rice & Rajma Quantity will be more.'"
    },
    {
      icon: XCircle,
      title: "Cancellation Policy",
      content: "If package is cancelled in between, so far delivered Tiffin prize would be calculated as per Per Day Prize and remaining amount be refunded."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-8 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Before Ordering, Make a Note:
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Please read these important points carefully before using our services.
              </p>
              <div className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-full text-sm font-medium">
                <AlertCircle className="w-5 h-5 mr-2" />
                Important Information
              </div>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">


                {/* Content */}
                <div className="px-8 pb-8 pt-4">
                  <div className="space-y-8 pt-0">
                    {terms.map((term, index) => {
                      const IconComponent = term.icon;
                      return (
                        <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-200">
                          <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {term.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {term.content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-start space-x-3">
                        <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">
                            Important Notice
                          </h4>
                          <p className="text-blue-800 text-sm leading-relaxed">
                            By placing an order, you acknowledge that you have read, understood, and agree to comply with all the terms and conditions stated above. These terms are subject to change, and the most current version will always be available on this page.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-gray-500 text-sm">
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
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