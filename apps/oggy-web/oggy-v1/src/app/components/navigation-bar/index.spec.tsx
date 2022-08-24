import { render } from '@testing-library/react';

import NavigationBar from './index';

describe('NavigationBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationBar />);
    expect(baseElement).toBeTruthy();
  });
});
