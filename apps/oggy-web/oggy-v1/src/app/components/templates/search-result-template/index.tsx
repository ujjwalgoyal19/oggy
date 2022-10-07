import styled from 'styled-components';

//* Service

// * Imports
import Filters from 'app/components/organisms/filters';
import Gallery from 'app/components/organisms/gallery';
import Container from 'app/components/atoms/container';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface SearchResultTemplateProps {
  Heading: string;
}

const StyledSearchResultTemplate = styled.div`
  min-height: 100vh;
  margin-bottom: 20vh;
  background-color: #f6f6f6;
  ${media.greaterThan('md')`
    background-color: white;
  `}
`;

export function SearchResultTemplate(props: SearchResultTemplateProps) {
  const device = useDeviceType();
  return (
    <StyledSearchResultTemplate>
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
        Index={100}
      >
        <Container Width={device.greaterThan('md') ? '70%' : '97%'}>
          <Filters />
        </Container>
      </Container>
      <Container Column CenterCA Index={99} MarginTop="2rem">
        <Gallery />
      </Container>
    </StyledSearchResultTemplate>
  );
}

export default SearchResultTemplate;
