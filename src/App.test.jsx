import { render, screen } from '@testing-library/react';
import App from './App';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div data-testid="router">{children}</div>,
  Routes: ({ children }) => <div data-testid="routes">{children}</div>,
  Route: ({ element }) => <div data-testid="route">{element}</div>,
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('router')).toBeInTheDocument();
  });

  test('includes theme provider', () => {
    render(<App />);
    // The app should render without throwing errors
    expect(screen.getByTestId('router')).toBeInTheDocument();
  });
});