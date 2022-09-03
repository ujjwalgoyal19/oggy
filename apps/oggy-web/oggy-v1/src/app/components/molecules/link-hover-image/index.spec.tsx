import { render } from '@testing-library/react';

import LinkHoverImage from './index';

describe('LinkHoverImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkHoverImage />);
    expect(baseElement).toBeTruthy();
  });
});
