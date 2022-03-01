import { render, screen } from '@testing-library/react';
import ShowItem from './';

test('renders learn react link', () => {
  render(<ShowItem />);
  const linkElement = screen.getByText(/ShowItem/i);
  expect(linkElement).toBeInTheDocument();
});
