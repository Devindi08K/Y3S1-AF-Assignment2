import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const login = (username) => {
    localStorage.setItem('user', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const toggleFavorite = (countryCode) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(countryCode)
        ? prev.filter(code => code !== countryCode)
        : [...prev, countryCode];
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (countryCode) => favorites.includes(countryCode);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, favorites, toggleFavorite, isFavorite }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
