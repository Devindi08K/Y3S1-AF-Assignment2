import React from 'react';

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div className="flex justify-center my-4">
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="px-4 py-2 rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary-dark"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
