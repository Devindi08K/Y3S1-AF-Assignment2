import React, { useContext }  from 'react';
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
      <div className="relative">
      <Link to={`/country/${country.cca3}`}>
        <div className="bg-cream rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out border border-primary-dark">
          <button
            onClick={handleFavoriteClick}
            className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
            aria-label={isCountryFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isCountryFavorite ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-400 text-xl" />
            )}
          </button>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-primary-dark text-xl font-bold mb-2">{country.name.common}</h2>
            <p className="text-primary-dark text-sm">
              <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
            </p>
            <p className="text-primary-dark text-sm">
              <strong>Region:</strong> {country.region}
            </p>
            <p className="text-primary-dark text-sm">
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
   

  );
};

export default CountryInfo;
