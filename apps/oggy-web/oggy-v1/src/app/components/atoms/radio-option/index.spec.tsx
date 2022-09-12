import { render } from '@testing-library/react';

import RadioOption from './index';

describe('RadioOption', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioOption />);
    expect(baseElement).toBeTruthy();
  });
});
