
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Address',
      details: 'University Road, Peshawar,<br/>Khyber Pakhtunkhwa, Pakistan'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'info@silkroutejourneys.com<br/>booking@silkroutejourneys.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: '+92 91 1234567<br/>+92 300 1234567'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative h-full flex items-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-100">
                We'd love to hear from you and help plan your journey
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-6">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: info.details }}></p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Form and Map */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <ContactForm />
                </div>
                
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                  <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.6767939519097!2d71.48288427619654!3d34.00516882033229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0x6ba7e1684c24321b!2sUniversity%20Rd%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699013136405!5m2!1sen!2s" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Our office is located on University Road, one of the main arteries of Peshawar city, 
                    providing easy access for visitors and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What are your office hours?</h3>
                  <p className="text-gray-600">We are open Monday to Saturday from 9:00 AM to 6:00 PM (PKT). We are closed on Sundays and public holidays.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">How far in advance should I book my trip?</h3>
                  <p className="text-gray-600">For peak travel seasons (summer months and holidays), we recommend booking at least 3-4 months in advance. For off-peak seasons, 1-2 months notice is usually sufficient.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">Do you offer international tours?</h3>
                  <p className="text-gray-600">Yes, we organize tours to several international destinations, particularly along the historic Silk Route countries including China, Central Asia, and the Middle East.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept bank transfers, credit/debit cards, and cash payments at our office. For international clients, we can also arrange for wire transfers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
