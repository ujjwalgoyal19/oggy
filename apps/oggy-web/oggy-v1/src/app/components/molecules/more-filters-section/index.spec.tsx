import { render } from '@testing-library/react';

import MoreFiltersSection from './index';

describe('MoreFiltersSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoreFiltersSection />);
    expect(baseElement).toBeTruthy();
  });
});
