import { render } from '@testing-library/react';

import RestaurantPageTemplate from './index';

describe('RestaurantPageTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RestaurantPageTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
