import { render } from '@testing-library/react';

import Locality from './index';

describe('Locality', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Locality />);
    expect(baseElement).toBeTruthy();
  });
});
