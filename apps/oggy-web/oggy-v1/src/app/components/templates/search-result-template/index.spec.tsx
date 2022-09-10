import { render } from '@testing-library/react';

import SearchResultTemplate from './index';

describe('SearchResultTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchResultTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
