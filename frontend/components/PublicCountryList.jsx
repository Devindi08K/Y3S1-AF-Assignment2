import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaSignInAlt, FaSearch, FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion,
} from '../services/countryService';

const PublicCountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

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

  const sortCountries = (data) => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      let aValue = sortConfig.key === 'name' ? a.name.common : a[sortConfig.key];
      let bValue = sortConfig.key === 'name' ? b.name.common : b[sortConfig.key];

      if (typeof aValue === 'number') {
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      if (Array.isArray(aValue)) aValue = aValue[0] || '';
      if (Array.isArray(bValue)) bValue = bValue[0] || '';

      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
  };

  const requestSort = (key, e) => {
    
    e.preventDefault();
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key && current.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key !== columnName) return <FaSort />;
    return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  const sortedCountries = sortCountries(countries);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-[#1a1a2e] to-primary-dark">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <FaGlobeAmericas className="text-4xl text-cream animate-spin-slow" />
            <h1 className="text-2xl font-bold text-cream">Countries Explorer</h1>
          </Link>
          <Link 
            to="/login"
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-all duration-300 flex items-center gap-2"
          >
            <span>Sign In</span>
            <FaSignInAlt />
          </Link>
        </div>
      </header>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 border border-white/20 text-cream placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="relative min-w-[200px]">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-cream focus:outline-none focus:ring-2 focus:ring-primary pr-10"
            >
              <option value="">Filter by Region</option>
              {regions.map(region => (
                <option key={region} value={region} className="bg-primary-dark text-cream">{region}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-cream">
              <FaSort />
            </div>
          </div>
        </div>

        {/* Countries Table */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-cream animate-pulse">Loading countries...</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-cream">
              <thead className="bg-white/10 text-left">
                <tr>
                  <th 
                    className="px-6 py-4 cursor-pointer hover:bg-white/5"
                    onClick={(e) => requestSort('name', e)}
                  >
                    <div className="flex items-center gap-2 select-none">
                      Country {getSortIcon('name')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 cursor-pointer hover:bg-white/5"
                    
                  >
                    <div className="flex items-center gap-2 select-none">
                      Capital 
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 cursor-pointer hover:bg-white/5"
                    onClick={(e) => requestSort('region', e)}
                  >
                    <div className="flex items-center gap-2 select-none">
                      Region {getSortIcon('region')}
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 cursor-pointer hover:bg-white/5"
                    onClick={(e) => requestSort('population', e)}
                  >
                    <div className="flex items-center gap-2 select-none">
                      Population {getSortIcon('population')}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {sortedCountries.map(country => (
                  <tr 
                    key={country.cca3}
                    className="bg-transparent hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={country.flags.png} 
                          alt={`Flag of ${country.name.common}`}
                          className="w-8 h-6 object-cover rounded"
                        />
                        <span className="text-cream">{country.name.common}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-cream">{country.capital?.[0] || 'N/A'}</td>
                    <td className="px-6 py-4 text-cream">{country.region}</td>
                    <td className="px-6 py-4 text-cream">{country.population.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicCountryList;