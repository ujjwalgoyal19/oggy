import { render } from '@testing-library/react';

import CircleCard from './index';

describe('CircleCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CircleCard />);
    expect(baseElement).toBeTruthy();
  });
});
