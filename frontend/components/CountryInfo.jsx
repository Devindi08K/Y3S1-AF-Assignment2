import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CountryInfo = ({ country }) => {
  const { toggleFavorite, isFavorite } = useContext(AuthContext);
  const isCountryFavorite = isFavorite(country.cca3);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(country.cca3);
  };

  return (
    <div className="relative group animate-fade-in">
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 z-20 p-3 bg-white/90 rounded-full hover:bg-white transform hover:scale-110 transition-all duration-300 shadow-md"
        aria-label={isCountryFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isCountryFavorite ? (
          <FaHeart className="text-primary text-xl" />
        ) : (
          <FaRegHeart className="text-gray-400 text-xl group-hover:text-primary-light transition-colors duration-300" />
        )}
      </button>
      <Link to={`/country/${country.cca3}`}>
        <div className="bg-cream rounded-2xl shadow-custom hover:shadow-custom-hover overflow-hidden transform hover:-translate-y-1 transition-all duration-300 border border-primary-dark/10">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="p-5">
            <h2 className="text-primary-dark text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
              {country.name.common}
            </h2>
            <p className="text-primary-dark/80 text-sm">
              <strong className="font-semibold">Capital:</strong> {country.capital?.[0] || 'N/A'}
            </p>
            <p className="text-primary-dark/80 text-sm">
              <strong className="font-semibold">Region:</strong> {country.region}
            </p>
            <p className="text-primary-dark/80 text-sm">
              <strong className="font-semibold">Population:</strong> {country.population.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CountryInfo;