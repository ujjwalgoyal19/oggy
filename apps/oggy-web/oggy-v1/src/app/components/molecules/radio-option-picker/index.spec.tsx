import { render } from '@testing-library/react';

import RadioOptionPicker from './index';

describe('RadioOptionPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioOptionPicker />);
    expect(baseElement).toBeTruthy();
  });
});
