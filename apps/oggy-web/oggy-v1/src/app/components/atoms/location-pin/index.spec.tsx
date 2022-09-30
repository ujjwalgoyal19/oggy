import { render } from '@testing-library/react';

import LocationPin from './index';

describe('LocationPin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocationPin />);
    expect(baseElement).toBeTruthy();
  });
});
