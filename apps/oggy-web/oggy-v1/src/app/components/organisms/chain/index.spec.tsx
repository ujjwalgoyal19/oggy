import { render } from '@testing-library/react';

import Chain from './index';

describe('Chain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Chain />);
    expect(baseElement).toBeTruthy();
  });
});
