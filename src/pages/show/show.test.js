import { render, screen } from '@testing-library/react';
import Show from './';

test('renders learn react link', () => {
  render(<Show />);
  const linkElement = screen.getByText(/show/i);
  expect(linkElement).toBeInTheDocument();
});
