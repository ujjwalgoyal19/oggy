import { render } from '@testing-library/react';

import RestaurantPage from './index';

describe('RestaurantPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RestaurantPage />);
    expect(baseElement).toBeTruthy();
  });
});
