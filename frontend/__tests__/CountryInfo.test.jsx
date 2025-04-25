import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CountryInfo from '../components/CountryInfo';
import { AuthContext } from '../context/AuthContext';

describe('CountryInfo Component', () => {
  const mockCountry = {
    name: { common: 'Test Country' },
    capital: ['Test Capital'],
    region: 'Test Region',
    population: 1000000,
    flags: { png: 'test-flag.png' },
    cca3: 'TST'
  };

  const mockToggleFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  const renderCountryInfo = () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ toggleFavorite: mockToggleFavorite, isFavorite: mockIsFavorite }}>
          <CountryInfo country={mockCountry} />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  test('renders country information', () => {
    renderCountryInfo();
    
    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByText(/Test Capital/)).toBeInTheDocument();
    expect(screen.getByText(/Test Region/)).toBeInTheDocument();
    expect(screen.getByText(/1,000,000/)).toBeInTheDocument();
  });

  test('handles favorite toggle', () => {
    renderCountryInfo();
    
    const favoriteButton = screen.getByRole('button');
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith('TST');
  });
});