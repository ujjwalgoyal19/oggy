import { render } from '@testing-library/react';

import LoginRegistrationPage from './index';

describe('LoginRegistrationPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginRegistrationPage />);
    expect(baseElement).toBeTruthy();
  });
});
