import { render } from '@testing-library/react';

import SearchResultPage from './index';

describe('SearchResultPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchResultPage />);
    expect(baseElement).toBeTruthy();
  });
});
