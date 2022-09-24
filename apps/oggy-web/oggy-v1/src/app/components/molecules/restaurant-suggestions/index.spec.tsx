import { render } from '@testing-library/react';

import RestaurantSuggestions from './index';

describe('RestaurantSuggestions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RestaurantSuggestions />);
    expect(baseElement).toBeTruthy();
  });
});
