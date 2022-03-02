import { render } from '@testing-library/react';
import ShowItem from './';

test('renders learn react link', () => {
  const { container } = render(<ShowItem />)
  expect(container.getElementsByClassName('show-item').length).toBe(1);
});

