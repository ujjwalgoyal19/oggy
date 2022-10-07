import styled from 'styled-components';

//* Service

// * Imports
import Section from 'app/components/atoms/section';
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {
  Heading: string;
}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  margin-bottom: 20vh;
  background-color: inherit;
  background-color: #f6f6f6;
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  return (
    <StyledSearchResultTemplate>
      <Container
        Width="100%"
        Position={{ Type: 'sticky' }}
        PaddingBottom="1rem"
        // Padding="3rem 0rem 3rem 0rem"
        MarginBottom="2rem"
        BG="White"
      >
        <Section Width="95%">
          <Filters />
        </Section>
      </Container>
      <Section Width="90%" Index={99}>
        <Gallery />
      </Section>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
