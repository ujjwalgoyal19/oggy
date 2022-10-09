import { render } from '@testing-library/react';

import MobileFooter from './index';

describe('MobileFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileFooter />);
    expect(baseElement).toBeTruthy();
  });
});
