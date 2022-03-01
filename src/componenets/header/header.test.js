import { render, screen } from '@testing-library/react';
import Header from './';

test('renders learn react link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/tv bland/i);
  expect(linkElement).toBeInTheDocument();
});
