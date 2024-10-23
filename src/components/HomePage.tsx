import React, { useState } from 'react';
import { ChevronDown, Thermometer } from 'lucide-react';

const crops = ['Rice', 'Wheat', 'Corn', 'Soybean'];

const diseases = [
  { name: 'Apple Scrab', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Rice Blast', image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const HomePage: React.FC = () => {
  const [selectedCrop, setSelectedCrop] = useState('Select Crop');

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <header className="bg-green-500 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" alt="User" className="w-10 h-10 rounded-full mr-2" />
          <h1 className="text-white text-xl font-semibold">Farm Help</h1>
        </div>
        <button className="text-white">
          <ChevronDown size={24} />
        </button>
      </header>

      <main className="p-4">
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <select
              value={selectedCrop}
              onChange={(e) => setSelectedCrop(e.target.value)}
              className="bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-semibold"
            >
              <option value="Select Crop">Select Crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>{crop}</option>
              ))}
            </select>
            <div className="flex items-center text-gray-600">
              <Thermometer size={20} className="mr-1" />
              <span>30°C</span>
            </div>
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Chhatikara</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {['Diseases', 'Pests', 'Nutrients', 'Weeds'].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
              <span className="text-green-600 font-semibold">{item}</span>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold mb-2">Common Diseases</h2>
        <div className="grid grid-cols-2 gap-4">
          {diseases.map((disease) => (
            <div key={disease.name} className="bg-white rounded-lg shadow overflow-hidden">
              <img src={disease.image} alt={disease.name} className="w-full h-32 object-cover" />
              <div className="p-2">
                <h3 className="text-sm font-semibold">{disease.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;