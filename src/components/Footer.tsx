
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Silk Route Journeys</h3>
            <p className="text-gray-300 mb-4">Your Gateway to Cultural Wonders and Adventures</p>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <p>
                University Road, Peshawar,<br />
                Khyber Pakhtunkhwa, Pakistan
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-sky-400">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="bg-gradient-to-r from-amber-400 to-sky-500 p-2 rounded-full hover:scale-110 transition-transform">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-400 to-sky-500 p-2 rounded-full hover:scale-110 transition-transform">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-400 to-sky-500 p-2 rounded-full hover:scale-110 transition-transform">
                <Phone size={20} />
              </a>
            </div>
            <p className="text-gray-300">
              Registered with Khyber Pakhtunkhwa Government, Pakistan
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Silk Route Journeys & Excursions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
