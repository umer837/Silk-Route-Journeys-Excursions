import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Silk Route Journeys Logo" 
            className="h-12 w-auto mr-3"
          />
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-sky-500 to-amber-400 bg-clip-text text-transparent">
            Silk Route Journeys
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
            Services
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-sky-500 font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-2 space-y-3 flex flex-col">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-sky-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 text-gray-700 hover:text-sky-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="block py-2 text-gray-700 hover:text-sky-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className="block py-2 text-gray-700 hover:text-sky-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block py-2 text-gray-700 hover:text-sky-500 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
