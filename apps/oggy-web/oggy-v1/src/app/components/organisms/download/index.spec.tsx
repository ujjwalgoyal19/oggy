import { render } from '@testing-library/react';

import Download from './index';

describe('Download', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Download />);
    expect(baseElement).toBeTruthy();
  });
});
