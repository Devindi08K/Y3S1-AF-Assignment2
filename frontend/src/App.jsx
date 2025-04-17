import React from 'react';
import CountryList from '../components/countryList';

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-primary-dark p-6">Explore Countries 🌍</h1>
      <CountryList/>
    </div>
  );
};

export default App;
