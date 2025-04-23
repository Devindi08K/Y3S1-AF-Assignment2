import React from 'react';
import CountryList from 'components/countryList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryDetails from 'components/CountryDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
