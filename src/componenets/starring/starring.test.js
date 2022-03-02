import { render } from '@testing-library/react';
import Starring from './';

describe('Starring Tests', () => {
  test('renders starring component and finds starring element', () => {
    const { container } = render(<Starring />);
    expect(container.getElementsByClassName('starring').length).toBe(1);
  });
});


