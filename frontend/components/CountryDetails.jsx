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

  if (!country) return (
    <div className="min-h-screen bg-beige flex items-center justify-center">
      <p className="text-xl text-primary animate-pulse">Loading country details...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-beige px-4 sm:px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center px-4 py-2 bg-primary text-cream rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <span className="mr-2">&larr;</span> Back to Home
        </Link>

        <div className="mt-8 bg-cream rounded-2xl shadow-lg p-6 sm:p-8 border border-primary-dark/10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Flag */}
            <div className="relative">
              <img 
                src={country.flags.svg} 
                alt={country.name.common} 
                className="w-full h-auto rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-primary-dark">{country.name.common}</h1>
              
              <div className="grid gap-4 text-primary-dark/90">
                <div className="space-y-3">
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Official Name:</span>
                    <span>{country.name.official}</span>
                  </p>
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Capital:</span>
                    <span>{country.capital?.[0] || 'N/A'}</span>
                  </p>
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Region:</span>
                    <span>{country.region}</span>
                  </p>
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Subregion:</span>
                    <span>{country.subregion || 'N/A'}</span>
                  </p>
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Population:</span>
                    <span>{country.population.toLocaleString()}</span>
                  </p>
                  <p className="flex items-baseline">
                    <span className="font-semibold w-32">Languages:</span>
                    <span>{country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
