import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Leaf, Home, Settings, Users } from 'lucide-react';
import OpeningPage from './components/OpeningPage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import PhoneEmailPage from './components/PhoneEmailPage';
import { AuthProvider, useAuth } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-green-50">
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/phone-email" element={<PhoneEmailPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
        />
      </Routes>
      {isAuthenticated && (
        <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full">
          <div className="flex justify-around items-center h-16">
            <button className="text-green-600">
              <Home size={24} />
            </button>
            <button className="text-gray-400">
              <Leaf size={24} />
            </button>
            <button className="text-gray-400">
              <Users size={24} />
            </button>
            <button className="text-gray-400">
              <Settings size={24} />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;