import { render, screen } from '@testing-library/react';
import StarsRating from '.';

describe('Rating Tests', () => {
  test('renders startRaring component and finds review-stars element', () => {
    const { container } = render(<StarsRating />)
    expect(container.getElementsByClassName('review-stars').length).toBe(1);
  });
})

