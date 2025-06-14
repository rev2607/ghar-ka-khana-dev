import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch("https://jtdfonlvb1.execute-api.ap-south-1.amazonaws.com/prod/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Thank you for your message! We'll call you soon.");
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full bg-brand-orange text-white text-center py-2 font-bold text-lg shadow-md z-50">Launching soon in your Area</div>
      <Navbar />
      <main className="flex-grow">
        <section className="py-12" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </section>

        <section className="py-16" style={{ background: 'linear-gradient(to bottom, #FFEFD6 0%, white 100%)' }}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-brown mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have questions about our subscription plans, special dietary requirements, or anything else? Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-lightOrange p-3 rounded-full mr-4">
                      <MapPin className="text-brand-brown" />
                    </div>
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-600">Shop 2, Plot Y5, Sector 19, Shahbaaz Gaon, CBD Belapur, Navi Mumbai 400614</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-lightOrange p-3 rounded-full mr-4">
                      <Phone className="text-brand-brown" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+91 8108-325-444</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-lightOrange p-3 rounded-full mr-4">
                      <Mail className="text-brand-brown" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">info@neelamghar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-lightOrange p-3 rounded-full mr-4">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-gray-600">Monday to Saturday</p>
                      <p className="text-gray-600">Day Delivery: 11:00 AM - 1:30 PM</p>
                      <p className="text-gray-600">Night Delivery: 7:00 PM - 9:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="rounded-xl border border-black shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#7C2D12] mb-4">Send us a Message</h3>
                    <div className="flex justify-center">
                      <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfUQmlGosqQrbSvn8rvFvedG2GZQlhc6uzm5nfPpl7hUp0hfA/viewform?embedded=true" 
                        width="640" 
                        height="959" 
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0}
                        title="Contact Google Form"
                        style={{ maxWidth: '100%', width: '100%', border: 'none' }}
                      >Loading…</iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12" style={{ background: 'linear-gradient(to bottom, white 0%, #FFEFD6 100%)' }}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-brand-brown mb-6">Delivery Areas</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              We currently serve the following areas in Mumbai. If your area is not listed, contact us to check if we can accommodate your location.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded shadow-sm">Andheri East</div>
              <div className="bg-white p-4 rounded shadow-sm">Andheri West</div>
              <div className="bg-white p-4 rounded shadow-sm">Bandra East</div>
              <div className="bg-white p-4 rounded shadow-sm">Bandra West</div>
              <div className="bg-white p-4 rounded shadow-sm">Juhu</div>
              <div className="bg-white p-4 rounded shadow-sm">Santacruz</div>
              <div className="bg-white p-4 rounded shadow-sm">Vile Parle</div>
              <div className="bg-white p-4 rounded shadow-sm">Powai</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
