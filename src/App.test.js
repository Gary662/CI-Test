import { render, screen } from '@testing-library/react';
import App from './App';

test('shows name on page', () => {
  render(<App />);
  const nameElement = screen.getByText(/Gary/i);
  expect(nameElement).toBeInTheDocument();
});
