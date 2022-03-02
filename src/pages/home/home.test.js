import { render, screen } from '@testing-library/react';
import Home from './';

describe('Home Tests', () => {
  test('renders home component and gets find tv show text', () => {
    render(<Home />);
    const linkElement = screen.getByText(/tv show/i);
    expect(linkElement).toBeInTheDocument();
  });
});
