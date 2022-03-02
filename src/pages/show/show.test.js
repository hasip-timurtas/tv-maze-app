import { render } from '@testing-library/react';
import Show from './';

describe('Show page Tests', () => {
  test('renders show page components and finds Show element', () => {
    const { container } = render(<Show />)
    expect(container.getElementsByClassName('Show').length).toBe(1);
  });
});