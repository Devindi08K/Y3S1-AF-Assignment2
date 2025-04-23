import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-6">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-custom hover:shadow-custom-hover transition-all duration-300 pl-12"
        />
        <svg 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
          width="20" 
          height="20" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
