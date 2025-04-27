
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow group">
      <CardHeader className="pb-2">
        <div className="mb-2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-300 to-sky-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
