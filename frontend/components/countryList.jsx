import React, { useEffect, useState } from 'react';
import CountryInfo from './CountryInfo';
import { getAllCountries } from '../services/countryService';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await getAllCountries();
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  if (loading) return <p className="text-center text-primary-dark">Loading countries...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-beige min-h-screen">
      {countries.map((country) => (
        <CountryInfo key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
