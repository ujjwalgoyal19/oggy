import { render } from '@testing-library/react';

import AboutUsPage from './index';

describe('AboutUsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutUsPage />);
    expect(baseElement).toBeTruthy();
  });
});
