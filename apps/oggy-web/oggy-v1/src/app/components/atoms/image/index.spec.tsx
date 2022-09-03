import { render } from '@testing-library/react';

import Image from './index';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Image />);
    expect(baseElement).toBeTruthy();
  });
});
