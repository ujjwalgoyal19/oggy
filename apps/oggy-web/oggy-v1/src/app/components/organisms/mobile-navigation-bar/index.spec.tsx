import { render } from '@testing-library/react';

import MobileNavigationBar from './index';

describe('MobileNavigationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileNavigationBar />);
    expect(baseElement).toBeTruthy();
  });
});
