import { render } from '@testing-library/react';

import LocalitySuggestions from './index';

describe('LocalitySuggestions', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocalitySuggestions />);
    expect(baseElement).toBeTruthy();
  });
});
