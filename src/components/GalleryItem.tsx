
import React from 'react';

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  location: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageSrc, title, location }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-gray-200 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
