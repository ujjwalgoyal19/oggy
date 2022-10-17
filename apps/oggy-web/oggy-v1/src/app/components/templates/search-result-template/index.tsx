import styled from 'styled-components';

//* Service

// * Imports
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';
import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  margin-bottom: 20vh;
  background-color: white;
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  const device = useDeviceType();
  return (
    <StyledSearchResultTemplate>
      {device.greaterThan('md') && (
        <Container
          Width="100%"
          Position={{ Type: 'sticky', Top: '0' }}
          Padding={
            device.greaterThan('md')
              ? '3rem 0rem 3rem 0rem'
              : '1rem 0rem 1rem 0rem'
          }
          CenterMA
          BG="White"
          Index={2}
        >
          <Container Width="var(--search-page-width)">
            <Filters />
          </Container>
        </Container>
      )}
      <Container Column CenterCA Index={1} MarginTop="2rem">
        <Gallery />
      </Container>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
