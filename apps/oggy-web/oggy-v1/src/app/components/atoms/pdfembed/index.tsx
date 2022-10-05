import styled from 'styled-components';
import { useState } from 'react';
import Container from '../container';

/* eslint-disable-next-line */
export interface PDFEmbedProps {
  File: string;
}

const StyledPDFEmbed = styled.div`
  color: pink;
`;

export function PDFEmbed(this: any, props: PDFEmbedProps) {
  return (
    <StyledPDFEmbed>
      <Container Column CenterCA CenterMA Height="100vh" Width="65vw">
        <object
          data={props.File}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Alternative text - include a link{' '}
            <a href="http://africau.edu/images/default/sample.pdf">
              to the PDF!
            </a>
          </p>
        </object>
      </Container>
    </StyledPDFEmbed>
  );
}

export default PDFEmbed;
