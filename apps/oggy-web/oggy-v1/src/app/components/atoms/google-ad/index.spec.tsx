import { render } from '@testing-library/react';

import GoogleAd from './index';

describe('GoogleAd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleAd />);
    expect(baseElement).toBeTruthy();
  });
});
