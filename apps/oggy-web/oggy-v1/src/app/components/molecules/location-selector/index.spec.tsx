import { render } from '@testing-library/react';

import LocationSelector from './index';

describe('LocationSelector', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocationSelector />);
    expect(baseElement).toBeTruthy();
  });
});
