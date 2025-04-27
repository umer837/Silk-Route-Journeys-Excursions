
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex items-center px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Gateway to Cultural Wonders and Adventures
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover the beauty of the ancient Silk Route and beyond with customized tours and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/services">
              <Button className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white px-8 py-6 rounded-md text-lg">
                Explore Our Services
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 rounded-md text-lg transition-colors">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
