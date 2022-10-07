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
      <Container
        Column
        CenterCA
        CenterMA
        Height="100vh"
        Width="100vw"
        PaddingTop="5vh"
        PaddingBottom="5vh"
      >
        <Container Row Width="70vw">
          <object
            data={props.File}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Alternative text - include a link{' '}
              <a href={props.File}>to the PDF!</a>
            </p>
          </object>
        </Container>
      </Container>
    </StyledPDFEmbed>
  );
}

export default PDFEmbed;
