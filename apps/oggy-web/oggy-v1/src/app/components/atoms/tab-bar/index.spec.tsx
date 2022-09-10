import { render } from '@testing-library/react';

import Tab from './index';

describe('Tab', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tab />);
    expect(baseElement).toBeTruthy();
  });
});
