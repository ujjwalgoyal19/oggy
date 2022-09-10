import { render } from '@testing-library/react';

import Gallery from './index';

describe('Gallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gallery />);
    expect(baseElement).toBeTruthy();
  });
});
