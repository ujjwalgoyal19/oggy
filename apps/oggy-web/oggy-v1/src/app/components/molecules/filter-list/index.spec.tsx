import { render } from '@testing-library/react';

import FilterList from './index';

describe('FilterList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterList />);
    expect(baseElement).toBeTruthy();
  });
});
