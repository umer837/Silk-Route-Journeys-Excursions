
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import ServiceCard from '@/components/ServiceCard';
import { Plane, Hotel, Map, Compass, Users, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const destinations = [
    {
      name: 'Hunza Valley',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Lahore',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Swat Valley',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const featuredServices = [
    {
      title: 'Visa Assistance',
      description: 'Expert guidance and support for visa applications to ensure a smooth process.',
      icon: <Ticket size={24} />
    },
    {
      title: 'Tour Planning',
      description: 'Customized itineraries tailored to your interests, time frame, and budget.',
      icon: <Map size={24} />
    },
    {
      title: 'Hotel Booking',
      description: 'Curated selection of accommodations ranging from luxury to budget-friendly options.',
      icon: <Hotel size={24} />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        
        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Welcome to Silk Route Journeys</h2>
              <p className="text-gray-600 mb-8">
                We are dedicated to connecting travelers to the rich heritage of the Silk Route and beyond. 
                With our deep local knowledge and passion for travel, we create unforgettable experiences 
                that showcase the cultural and natural wonders of Pakistan and neighboring countries.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-sky-500 text-sky-600 hover:bg-sky-50">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of travel services to make your journey
                seamless, comfortable, and memorable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/services">
                <Button className="bg-gradient-to-r from-sky-500 to-amber-400 hover:from-sky-600 hover:to-amber-500">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Destinations */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore some of our most sought-after destinations featuring breathtaking 
                landscapes and rich cultural experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden h-80 group">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <h3 className="text-white text-xl font-bold">{destination.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/gallery">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                  Explore More Destinations
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-lg bg-gradient-to-r from-amber-50 to-sky-50">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="flex justify-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    "Our trip to Pakistan's northern areas was beyond expectations. The team at Silk Route Journeys took care of every detail and provided us with unforgettable experiences. Their local knowledge and personalized service made all the difference."
                  </p>
                  <p className="font-semibold">- Sarah Johnson, United Kingdom</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you create memories that last a lifetime. Contact us today to start planning your adventure.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-sky-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
