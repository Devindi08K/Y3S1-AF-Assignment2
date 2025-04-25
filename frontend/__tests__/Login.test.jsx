import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import { AuthContext } from '../context/AuthContext';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Login Component', () => {
  const mockLogin = jest.fn();

  const renderLogin = () => {
    render(
      <BrowserRouter>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <Login />
        </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  test('renders login form', () => {
    renderLogin();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  test('handles login submission', () => {
    renderLogin();
    const input = screen.getByPlaceholderText('Enter your name');
    const button = screen.getByText('Get Started');

    fireEvent.change(input, { target: { value: 'Test User' } });
    fireEvent.click(button);

    expect(mockLogin).toHaveBeenCalledWith('Test User');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});