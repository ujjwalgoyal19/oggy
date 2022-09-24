import { render } from '@testing-library/react';

import Photos from './index';

describe('Photos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Photos />);
    expect(baseElement).toBeTruthy();
  });
});
