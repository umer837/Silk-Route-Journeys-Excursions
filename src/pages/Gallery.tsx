
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryItem from '@/components/GalleryItem';

const Gallery = () => {
  const galleryItems = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80',
      title: 'Hunza Valley',
      location: 'Gilgit-Baltistan, Pakistan'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80',
      title: 'Fairy Meadows',
      location: 'Diamer District, Pakistan'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80',
      title: 'Badshahi Mosque',
      location: 'Lahore, Pakistan'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80',
      title: 'Swat Valley',
      location: 'Khyber Pakhtunkhwa, Pakistan'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80',
      title: 'Naran Kaghan',
      location: 'Mansehra, Pakistan'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80',
      title: 'Cholistan Desert',
      location: 'Punjab, Pakistan'
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
              backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative h-full flex items-center px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Gallery</h1>
              <p className="text-xl text-gray-100">
                Explore the beauty and diversity of our destinations
              </p>
            </div>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <GalleryItem
                  key={index}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  location={item.location}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Explore By Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80" 
                  alt="Cultural Heritage"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                  <h3 className="text-white text-xl font-bold">Cultural Heritage</h3>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80" 
                  alt="Natural Landscapes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                  <h3 className="text-white text-xl font-bold">Natural Landscapes</h3>
                </div>
              </div>
              
              <div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80" 
                  alt="Adventure Activities"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                  <h3 className="text-white text-xl font-bold">Adventure Activities</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-amber-400 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience These Destinations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today to start planning your journey to these beautiful locations and create your own picture-perfect memories.
            </p>
            <div className="inline-flex bg-white text-sky-600 font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Plan Your Journey
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
