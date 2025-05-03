import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FaGlobeAmericas, FaUserCircle } from 'react-icons/fa';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/90 via-primary to-primary-dark p-6 flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-20 -right-20 animate-pulse delay-300" />
        <div className="absolute w-64 h-64 bg-white/5 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse delay-700" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl shadow-custom hover:shadow-custom-hover p-8 w-full max-w-md space-y-6 animate-slide-up transition-all duration-300">
        
        <div className="flex flex-col items-center mb-8">
          <FaGlobeAmericas className="text-6xl text-primary mb-4 animate-spin-slow" />
          <h2 className="text-3xl font-bold text-primary-dark text-center">
            Welcome to Countries Explorer
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Discover the world at your fingertips
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <FaUserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 pl-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Start Exploring</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>

       
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center mb-4">With Countries Explorer you can:</p>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="p-3 bg-white/50 rounded-lg">
              <span className="block text-primary-dark font-semibold">Search Countries</span>
            </div>
            <div className="p-3 bg-white/50 rounded-lg">
              <span className="block text-primary-dark font-semibold">Filter by Region</span>
            </div>
            <div className="p-3 bg-white/50 rounded-lg">
              <span className="block text-primary-dark font-semibold">Save Favorites</span>
            </div>
            <div className="p-3 bg-white/50 rounded-lg">
              <span className="block text-primary-dark font-semibold">View Details</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
