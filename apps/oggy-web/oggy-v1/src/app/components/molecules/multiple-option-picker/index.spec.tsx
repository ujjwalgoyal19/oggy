import { render } from '@testing-library/react';

import MultipleOptionPicker from './index';

describe('MultipleOptionPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MultipleOptionPicker />);
    expect(baseElement).toBeTruthy();
  });
});
