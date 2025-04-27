
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface TeamMemberProps {
  name: string;
  position: string;
  imageSrc: string;
  bio?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, imageSrc, bio }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sky-600">{position}</p>
        {bio && <p className="mt-2 text-sm text-gray-600">{bio}</p>}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
