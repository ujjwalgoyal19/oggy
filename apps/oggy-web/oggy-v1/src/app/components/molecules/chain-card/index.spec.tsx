import { render } from '@testing-library/react';

import ChainCard from './index';

describe('ChainCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChainCard />);
    expect(baseElement).toBeTruthy();
  });
});
