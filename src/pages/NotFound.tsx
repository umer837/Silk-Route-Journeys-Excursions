
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-50 to-amber-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Link to="/">
          <Button className="bg-gradient-to-r from-sky-500 to-amber-400 hover:from-sky-600 hover:to-amber-500">
            <Home className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
