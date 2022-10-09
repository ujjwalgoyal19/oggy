import { render } from '@testing-library/react';

import SearchRestaurants from './index';

describe('SearchRestaurants', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchRestaurants />);
    expect(baseElement).toBeTruthy();
  });
});
