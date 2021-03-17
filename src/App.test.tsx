import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Learn AMM renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn AMM/i);
  expect(linkElement).toBeInTheDocument();
});
