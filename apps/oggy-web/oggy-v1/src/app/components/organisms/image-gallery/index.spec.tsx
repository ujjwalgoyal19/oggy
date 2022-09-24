import { render } from '@testing-library/react';

import ImageGallery from './index';

describe('ImageGallery', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageGallery />);
    expect(baseElement).toBeTruthy();
  });
});
