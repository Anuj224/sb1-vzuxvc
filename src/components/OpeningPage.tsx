import React from 'react';
import { Sprout } from 'lucide-react';

const OpeningPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-500">
      <Sprout size={100} className="text-white mb-4" />
      <h1 className="text-4xl font-bold text-white mb-2">Farm Help</h1>
      <p className="text-white text-lg">Your digital farming assistant</p>
    </div>
  );
};

export default OpeningPage;