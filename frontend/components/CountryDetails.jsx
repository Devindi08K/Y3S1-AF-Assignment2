import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../services/countryService';

const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountryByCode(code);
      setCountry(data[0]);
    };
    fetchData();
  }, [code]);

  if (!country) return <p className="text-center mt-10 text-primary-dark">Loading country details...</p>;

  return (
    <div className="min-h-screen bg-beige px-6 py-8">
      <Link to="/" className="text-primary hover:underline">&larr; Back</Link>
      <div className="mt-6 bg-white rounded-xl shadow p-6">
        <img src={country.flags.svg} alt={country.name.common} className="rounded-xl w-full max-w-md mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-center text-primary-dark mb-4">{country.name.common}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
          <p><strong>Official Name:</strong> {country.name.official}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Subregion:</strong> {country.subregion}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
