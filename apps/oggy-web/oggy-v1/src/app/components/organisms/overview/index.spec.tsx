import { render } from '@testing-library/react';

import Overview from './index';

describe('Overview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Overview />);
    expect(baseElement).toBeTruthy();
  });
});
