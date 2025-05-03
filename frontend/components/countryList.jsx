import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CountryInfo from './CountryInfo';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';
import { AuthContext } from '../context/AuthContext';
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
} from '../services/countryService';

const CountryList = () => {
  const { user, logout, favorites } = useContext(AuthContext);
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);

    try {
      let data = [];

      if (searchQuery) {
        data = await getCountryByName(searchQuery);
      } else if (selectedRegion) {
        data = await getCountriesByRegion(selectedRegion);
      } else {
        data = await getAllCountries();
      }

      setCountries(data);
    } catch (err) {
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  useEffect(() => {
    fetchCountries();
  }, [searchQuery, selectedRegion]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-darkerBeige via-lightBrown to-darkerBeige animate-gradient bg-gradient-size -z-10" />
      
      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-5">
      <div className="absolute w-40 h-40 bg-primary/15 rounded-full -top-10 -left-10 animate-float" />
      <div className="absolute w-52 h-52 bg-primary/15 rounded-full -bottom-24 -right-24 animate-float-delay" />
      <div className="absolute w-36 h-36 bg-primary/15 rounded-full top-1/4 right-1/4 animate-float" />
      <div className="absolute w-48 h-48 bg-primary/15 rounded-full bottom-1/4 left-1/4 animate-float-delay" />
      
      <div className="absolute w-32 h-32 bg-primary/20 rounded-full top-10 right-10 animate-float" />
      <div className="absolute w-28 h-28 bg-primary/20 rounded-full bottom-10 left-10 animate-float-delay" />
      <div className="absolute w-24 h-24 bg-primary/20 rounded-full top-1/2 left-1/2 animate-float" />
      <div className="absolute w-20 h-20 bg-primary/20 rounded-full bottom-1/2 right-1/2 animate-float-delay" />
    </div>


      {/* Main Content */}
      <div className="relative z-10 px-6">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-primary-dark">Welcome, {user}</h1>
          <div className="flex gap-4">
            <button 
              onClick={() => setShowFavorites(!showFavorites)}
              className={`px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 ${
                showFavorites 
                  ? 'bg-white text-primary border border-primary' 
                  : 'bg-primary text-white'
              }`}
            >
              {showFavorites ? 'Show All Countries' : 'Show Favorites'}
            </button>
            <button 
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
        
        {!showFavorites && (
          <>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
          </>
        )}

        {loading ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-xl text-primary-dark animate-pulse">Loading countries...</p>
          </div>
        ) : countries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
            {countries
              .filter(country => !showFavorites || favorites.includes(country.cca3))
              .map((country) => (
                <CountryInfo key={country.cca3} country={country} />
              ))}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-xl text-red-500">No countries found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryList;