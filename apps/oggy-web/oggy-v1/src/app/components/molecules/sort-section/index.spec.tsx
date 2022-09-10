import { render } from '@testing-library/react';

import SortSection from './index';

describe('SortSection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SortSection />);
    expect(baseElement).toBeTruthy();
  });
});
