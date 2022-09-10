import { render } from '@testing-library/react';

import CuisinesSection from './index';

describe('CuisinesSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CuisinesSection />);
    expect(baseElement).toBeTruthy();
  });
});
