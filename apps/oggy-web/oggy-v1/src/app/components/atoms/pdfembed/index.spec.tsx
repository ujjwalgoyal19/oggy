import { render } from '@testing-library/react';

import PDFEmbed from './index';

describe('PDFEmbed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PDFEmbed />);
    expect(baseElement).toBeTruthy();
  });
});
