import React, { useState } from 'react';
import { Phone, Mail, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PhoneEmailPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement Twilio Verify API call here
    console.log('Phone:', phoneNumber, 'Email:', email);
    // Simulate successful login
    login();
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate('/login')}
          className="mb-4 flex items-center text-green-600"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Login
        </button>
        <h1 className="text-3xl font-bold text-green-600 mb-8">Enter Your Details</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email (optional)
            </label>
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg transition duration-300 hover:bg-green-600"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneEmailPage;