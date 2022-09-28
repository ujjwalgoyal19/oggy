import { render } from '@testing-library/react';

import LoginRegistrationPageTemplate from './index';

describe('LoginRegistrationPageTemplate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginRegistrationPageTemplate />);
    expect(baseElement).toBeTruthy();
  });
});
