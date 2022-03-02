import { render, screen } from '@testing-library/react';
import Header from './';

describe('Header tests', () => {
  test('Renders Header and checks element with tv band text', () => {
    render(<Header />);
    const linkElement = screen.getByText(/tv bland/i);
    expect(linkElement).toBeInTheDocument();
  });
});