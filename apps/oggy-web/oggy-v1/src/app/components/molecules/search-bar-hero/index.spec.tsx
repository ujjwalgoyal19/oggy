import { render } from '@testing-library/react';

import SearchBarHero from './index';

describe('SearchBarHero', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBarHero />);
    expect(baseElement).toBeTruthy();
  });
});
