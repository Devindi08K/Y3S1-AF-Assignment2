import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username);
      navigate('/');
    }
  };

  return (
    <div 
      className="min-h-screen p-6 flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fade-in"
      style={{
        backgroundImage: `url('100+ Sunset Aesthetic Wallpapers and Backgrounds (Free, High-Res).jpeg')`
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <form onSubmit={handleLogin} className="relative z-10 bg-white/95 backdrop-blur-md rounded-xl shadow-custom hover:shadow-custom-hover p-8 w-full max-w-md space-y-6 animate-slide-up transition-all duration-300">
        <h2 className="text-3xl font-bold text-primary-dark text-center mb-8">Welcome to Countries Explorer App</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
        />
        <button 
          type="submit" 
          className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Login;
