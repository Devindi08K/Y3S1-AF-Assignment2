import React from 'react';

const CountryInfo = ({ country }) => {
  return (
    <div className="bg-cream rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 ease-in-out border border-primary-dark">
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
  );
};

export default CountryInfo;
