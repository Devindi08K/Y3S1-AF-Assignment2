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
    <div className="min-h-screen bg-light p-6 flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white rounded-xl shadow p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-primary-dark text-center">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none"
        />
        <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full hover:bg-red-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
