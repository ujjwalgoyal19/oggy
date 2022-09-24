import { render } from '@testing-library/react';

import Review from './index';

describe('Review', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Review />);
    expect(baseElement).toBeTruthy();
  });
});
