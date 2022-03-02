import { render, screen } from '@testing-library/react';
import StarsRating from '.';

test('renders learn react link', () => {
  const { container } = render(<StarsRating />)
  expect(container.getElementsByClassName('review-stars').length).toBe(1);
});
