import { render } from '@testing-library/react';

import RestaurantCard from './index';

describe('RestaurantCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RestaurantCard />);
    expect(baseElement).toBeTruthy();
  });
});
