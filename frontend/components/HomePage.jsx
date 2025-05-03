import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaSignInAlt, FaSearch, FaFilter, FaHeart, FaInfoCircle } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-[#1a1a2e] to-primary-dark">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        
        <div className="absolute w-40 h-40 bg-primary/15 rounded-full -top-10 -left-10 animate-float" />
        <div className="absolute w-52 h-52 bg-primary/15 rounded-full -bottom-24 -right-24 animate-float-delay" />
        <div className="absolute w-36 h-36 bg-primary/15 rounded-full top-1/4 right-1/4 animate-float" />
        <div className="absolute w-48 h-48 bg-primary/15 rounded-full bottom-1/4 left-1/4 animate-float-delay" />
        
        
        <div className="absolute w-32 h-32 bg-primary/20 rounded-full top-10 right-10 animate-float" />
        <div className="absolute w-28 h-28 bg-primary/20 rounded-full bottom-10 left-10 animate-float-delay" />
        <div className="absolute w-24 h-24 bg-primary/20 rounded-full top-1/2 left-1/2 animate-float" />
        <div className="absolute w-20 h-20 bg-primary/20 rounded-full bottom-1/2 right-1/2 animate-float-delay" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FaGlobeAmericas className="text-4xl text-cream animate-spin-slow" />
            <h1 className="text-2xl font-bold text-cream">Countries Explorer</h1>
          </div>
          <div className="flex gap-4">
            <Link 
              to="/countries" 
              className="px-4 py-2 text-cream hover:text-primary-light transition-colors duration-300"
            >
              Browse Countries
            </Link>
            <Link 
              to="/login"
              className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 flex items-center gap-2"
            >
              <span>Sign In</span>
              <FaSignInAlt />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-5xl font-bold text-cream mb-6 animate-fade-in">
            Discover Our World
          </h2>
          <p className="text-xl text-cream/80 mb-12 max-w-2xl mx-auto animate-slide-up">
            Explore detailed information about countries around the globe. Sign in to unlock additional features and personalize your experience.
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Link
              to="/countries"
              className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Exploring
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 bg-white/10 text-cream rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Sign In for More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaSearch className="text-cream text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2">Search Countries</h3>
              <p className="text-cream/70">Find any country quickly with our powerful search functionality</p>
            </div>

            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaFilter className="text-cream text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2">Filter by Region</h3>
              <p className="text-cream/70">Explore countries by their geographical regions</p>
            </div>

            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaHeart className="text-cream text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2">Save Favorites</h3>
              <p className="text-cream/70">Create your personal collection of favorite countries</p>
            </div>

            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
              <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FaInfoCircle className="text-cream text-xl" />
              </div>
              <h3 className="text-lg font-semibold text-cream mb-2">Detailed Info</h3>
              <p className="text-cream/70">Access comprehensive information about each country</p>
            </div>
          </div>
        </div>

        
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-cream mb-4">Ready to Explore?</h3>
            <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
              Sign in to unlock all features and start your journey around the world.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Get Started</span>
              <FaSignInAlt />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;