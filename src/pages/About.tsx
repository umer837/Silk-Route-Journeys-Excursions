
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamMember from '@/components/TeamMember';
import { Separator } from '@/components/ui/separator';

const About = () => {
  const team = [
    {
      name: 'Noor Qadeem Khan',
      position: 'CEO',
      imageSrc: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=500&q=80',
      bio: 'With over 15 years of experience in the tourism industry, Noor has dedicated his career to showcasing the cultural treasures of Pakistan to the world.'
    },
    {
      name: 'Khial Zaman',
      position: 'Chairman',
      imageSrc: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=500&q=80',
      bio: 'As Chairman, Khial brings strategic vision and extensive business expertise to guide our company toward sustainable growth and excellence in service.'
    },
    {
      name: 'Umar Farooq',
      position: 'Director',
      imageSrc: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=500&q=80',
      bio: 'Umar oversees our operations and ensures that every journey with us meets the highest standards of quality, safety, and customer satisfaction.'
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
              <p className="text-xl text-gray-100">
                Connecting travelers to the rich heritage of the Silk Route and beyond
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <p className="text-gray-700 mb-6">
                Founded in 2010, Silk Route Journeys & Excursions emerged from a passion for sharing the natural beauty and cultural richness of Pakistan with the world. Our journey began with small group tours in the northern areas of Pakistan, and has since expanded to offer comprehensive travel services across the country and into neighboring regions.
              </p>
              <p className="text-gray-700 mb-6">
                Named after the ancient network of trade routes that connected East and West, we are inspired by the spirit of cultural exchange and discovery that defined the historic Silk Road. Our mission is to create meaningful travel experiences that foster understanding and appreciation of diverse cultures, while supporting local communities and preserving natural environments.
              </p>
              <p className="text-gray-700">
                Today, we are proud to be a leading travel agency in Khyber Pakhtunkhwa, registered with the provincial government and committed to the highest standards of service and responsible tourism.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="max-w-3xl mx-auto" />
        
        {/* Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At Silk Route Journeys, our mission is to connect travelers to the rich heritage of the Silk Route and beyond, creating immersive and authentic experiences that highlight the cultural diversity, historical significance, and natural beauty of our destinations.
              </p>
              <p className="text-gray-700 mb-6">
                We are committed to:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                <li><strong>Excellence in Service:</strong> Providing personalized attention and professional guidance to ensure memorable journeys for all our clients.</li>
                <li><strong>Cultural Respect:</strong> Fostering understanding and appreciation for local traditions, customs, and ways of life.</li>
                <li><strong>Sustainable Tourism:</strong> Supporting local communities and minimizing environmental impact through responsible travel practices.</li>
                <li><strong>Safety and Security:</strong> Prioritizing the wellbeing of our clients through comprehensive risk management and local expertise.</li>
              </ul>
              <p className="text-gray-700">
                Whether you're seeking adventure, cultural immersion, historical exploration, or simply relaxation in stunning landscapes, we are dedicated to crafting journeys that exceed your expectations and create lasting memories.
              </p>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  position={member.position}
                  imageSrc={member.imageSrc}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-sky-500 to-amber-400 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Why Choose Silk Route Journeys</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                  <p>Our team consists of passionate locals with deep knowledge of destinations, cultures, and hidden gems.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Personalized Service</h3>
                  <p>We craft each itinerary with care, tailoring experiences to your interests, preferences, and pace.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p>We personally vet all accommodations, transport providers, and local partners to ensure excellent standards.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                  <p>Travel with confidence knowing our dedicated team is available to assist you throughout your journey.</p>
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

export default About;
