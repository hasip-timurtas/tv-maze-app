import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ShowItem from './';

describe('Show Item Tests', () => {
  test('renders showItem component and find show-item element', () => {
    const { container } = render(<Router><ShowItem /></Router>)
    expect(container.getElementsByClassName('show-item').length).toBe(1);
  });
});

