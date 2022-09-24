import { render } from '@testing-library/react';

import Offers from './index';

describe('Offers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Offers />);
    expect(baseElement).toBeTruthy();
  });
});
