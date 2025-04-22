import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 w-full max-w-md rounded-xl border border-primary focus:outline-none focus:ring-2 focus:ring-primary-dark"
      />
    </div>
  );
};

export default SearchBar;
