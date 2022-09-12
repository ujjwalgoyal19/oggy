import styled from 'styled-components';

//* Service

// * Imports
import Section from 'app/components/atoms/section';
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {
  Heading: string;
}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  margin-bottom: 20vh;
  background-color: inherit;
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  return (
    <StyledSearchResultTemplate>
      <Section
        Width="100%"
        Sticky
        Padding="3rem 0rem 3rem 0rem"
        MarginBottom="2rem"
        Index={100}
        BackgroundColor="white"
      >
        <Section Width="70%">
          <Filters />
        </Section>
      </Section>
      <Section Width="70%" Index={99}>
        <Gallery />
      </Section>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
