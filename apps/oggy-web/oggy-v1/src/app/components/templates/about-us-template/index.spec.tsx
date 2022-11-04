import { render } from '@testing-library/react';

import AboutUsTemplate from './index';

describe('AboutUsTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AboutUsTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
