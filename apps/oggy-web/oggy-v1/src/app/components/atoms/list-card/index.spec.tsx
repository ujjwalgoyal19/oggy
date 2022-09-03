import { render } from '@testing-library/react';

import ListCard from './index';

describe('ListCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListCard />);
    expect(baseElement).toBeTruthy();
  });
});
