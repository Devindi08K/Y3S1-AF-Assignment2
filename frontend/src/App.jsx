import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PublicCountryList from '../components/PublicCountryList';
import CountryList from '../components/countryList';
import CountryDetails from '../components/CountryDetails';
import Login from '../components/Login';
import { AuthContext } from '../context/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/countries" element={<PublicCountryList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={user ? <CountryList /> : <Navigate to="/login" />} />
        <Route path="/country/:code" element={user ? <CountryDetails /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
