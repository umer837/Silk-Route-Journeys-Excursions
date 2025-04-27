
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { 
  Plane, Hotel, Map, Compass, 
  Users, Ticket, Car, Camera 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Services = () => {
  const services = [
    {
      title: 'Visa Assistance',
      description: 'We provide comprehensive support for visa applications, including documentation guidance, application processing, and follow-up services to ensure a smooth and hassle-free experience.',
      icon: <Ticket size={24} />
    },
    {
      title: 'Travel Planning',
      description: 'Our expert travel consultants craft detailed itineraries tailored to your interests, timeframe, and budget, incorporating must-see attractions and hidden gems for a truly unique experience.',
      icon: <Map size={24} />
    },
    {
      title: 'Private Tours',
      description: 'Experience the freedom and flexibility of private tours designed exclusively for you and your companions, with dedicated guides and customized experiences.',
      icon: <Compass size={24} />
    },
    {
      title: 'Group Tours',
      description: 'Join like-minded travelers on our carefully curated group tours, offering the perfect balance of structured activities and personal discovery at competitive prices.',
      icon: <Users size={24} />
    },
    {
      title: 'Hotel Booking',
      description: 'Access our curated selection of accommodations ranging from luxury resorts to boutique hotels and authentic homestays, all personally vetted to ensure quality and comfort.',
      icon: <Hotel size={24} />
    },
    {
      title: 'Airport Transport',
      description: 'Start and end your journey smoothly with our reliable airport pickup and drop-off services, available at all major airports with comfortable vehicles and professional drivers.',
      icon: <Car size={24} />
    },
    {
      title: 'Adventure Excursions',
      description: 'Feed your spirit of adventure with our specialized excursions including trekking, hiking, mountain biking, white water rafting, and cultural expeditions led by experienced guides.',
      icon: <Plane size={24} />
    },
    {
      title: 'Photography Tours',
      description: 'Capture the breathtaking landscapes and cultural moments of your journey with our specialized photography tours, led by professional photographers who know the best spots.',
      icon: <Camera size={24} />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh]">
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-gray-100">
                Comprehensive travel solutions for unforgettable journeys
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Travel Solutions</h2>
              <p className="text-gray-600">
                At Silk Route Journeys, we offer a wide range of services designed to make your travel experience seamless, enriching, and memorable. From planning and preparation to on-the-ground support, we handle every aspect of your journey with care and attention to detail.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        <Separator className="max-w-4xl mx-auto" />
        
        {/* Custom Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Popular Tour Packages</h2>
              <div className="space-y-8 mt-10">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                        alt="Cultural Heritage Tour"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Cultural Heritage Tour</h3>
                      <p className="text-gray-600 mb-4">Explore the rich cultural heritage of Pakistan, from ancient archaeological sites to bustling bazaars and magnificent architecture.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-medium">10 Days</span>
                        <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">Cultural</span>
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">Historical</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" 
                        alt="Northern Adventure"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Northern Adventure</h3>
                      <p className="text-gray-600 mb-4">Discover the breathtaking landscapes of northern Pakistan, including Hunza, Skardu, and the majestic Karakoram mountains.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-medium">14 Days</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">Adventure</span>
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Scenic</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80" 
                        alt="Silk Road Explorer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold mb-2">Silk Road Explorer</h3>
                      <p className="text-gray-600 mb-4">Follow the ancient Silk Road through Pakistan, exploring historical trade routes, mountain passes, and cultural exchanges.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-medium">21 Days</span>
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Historical</span>
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">Cross-border</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Customized Travel Experience</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? We specialize in creating customized travel experiences tailored to your specific interests, timeframe, and budget.
            </p>
            <div className="inline-flex bg-white text-sky-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Contact Us for Custom Packages
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
