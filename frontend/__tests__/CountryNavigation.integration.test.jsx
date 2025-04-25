import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CountryList from '../components/countryList';
import CountryDetails from '../components/CountryDetails';
import * as countryService from '../services/countryService';

// Mock the country service
jest.mock('../services/countryService', () => ({
  getAllCountries: jest.fn(),
  getCountryByCode: jest.fn()
}));

describe('Country Navigation Integration', () => {
  const mockCountry = {
    name: { common: 'Test Country' },
    capital: ['Test Capital'],
    region: 'Test Region',
    population: 1000000,
    flags: { png: 'test-flag.png', svg: 'test-flag.svg' },
    cca3: 'TST'
  };

  const mockAuthContext = {
    user: 'TestUser',
    toggleFavorite: jest.fn(),
    isFavorite: jest.fn(),
    favorites: []
  };

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Setup mock responses
    countryService.getAllCountries.mockResolvedValue([mockCountry]);
    countryService.getCountryByCode.mockResolvedValue([{
      ...mockCountry,
      name: { common: 'Test Country', official: 'Test Country Official' },
      languages: { eng: 'English' },
      currencies: { USD: { name: 'US Dollar' } },
      tld: ['.test'],
      borders: ['ABC', 'XYZ']
    }]);
  });

  test('navigates from country list to country details', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={mockAuthContext}>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // Wait for the country list to load
    await waitFor(() => {
      expect(screen.getByText('Test Country')).toBeInTheDocument();
    });

    // Click on the country card
    const countryCard = screen.getByText('Test Country');
    await user.click(countryCard);

    // Wait for the country details to load
    await waitFor(() => {
      // Check if we're on the details page
      expect(screen.getByText('Official Name:')).toBeInTheDocument();
      expect(screen.getByText('Test Country Official')).toBeInTheDocument();
      expect(screen.getByText('Back to Home')).toBeInTheDocument();
    });

    // Test navigation back to home
    const backButton = screen.getByText('Back to Home');
    await user.click(backButton);

    // Verify we're back on the country list
    await waitFor(() => {
      expect(screen.getByText('Welcome, TestUser')).toBeInTheDocument();
    });
  });

  test('displays correct country details after navigation', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AuthContext.Provider value={mockAuthContext}>
          <Routes>
            <Route path="/" element={<CountryList />} />
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    );

    // Wait for the country list to load
    await waitFor(() => {
      expect(screen.getByText('Test Country')).toBeInTheDocument();
    });

    // Click on the country card
    const countryCard = screen.getByText('Test Country');
    await user.click(countryCard);

    // Verify detailed information is displayed
    await waitFor(() => {
      expect(screen.getByText('Population:')).toBeInTheDocument();
      expect(screen.getByText('1,000,000')).toBeInTheDocument();
      expect(screen.getByText('Languages:')).toBeInTheDocument();
      expect(screen.getByText('English')).toBeInTheDocument();
      expect(screen.getByText('Currencies:')).toBeInTheDocument();
      expect(screen.getByText('US Dollar')).toBeInTheDocument();
    });
  });
});