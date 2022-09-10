import { render } from '@testing-library/react';

import Filters from './index';

describe('Filters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Filters />);
    expect(baseElement).toBeTruthy();
  });
});
