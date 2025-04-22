import React, { useEffect, useState } from 'react';
import CountryInfo from './CountryInfo';
import SearchBar from './SearchBar';
import RegionFilter from './RegionFilter';
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
} from '../services/countryService';

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

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

  useEffect(() => {
    fetchCountries();
  }, [searchQuery, selectedRegion]);

  return (
    <div className="bg-beige min-h-screen px-6">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />

      {loading ? (
        <p className="text-center text-primary-dark">Loading countries...</p>
      ) : countries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
          {countries.map((country) => (
            <CountryInfo key={country.cca3} country={country} />
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">No countries found.</p>
      )}
    </div>
  );
};

export default CountryList;