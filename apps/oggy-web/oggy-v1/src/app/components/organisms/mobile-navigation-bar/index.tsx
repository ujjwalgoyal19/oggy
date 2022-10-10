import Container from 'app/components/atoms/container';
import LocationSelector from 'app/components/molecules/location-selector';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import styled from 'styled-components';
import Filters from '../filters';

/* eslint-disable-next-line */
export interface MobileNavigationBarProps {}

const StyledMobileNavigationBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;
  z-index: 100;
  padding: 1rem;
`;

export function MobileNavigationBar(props: MobileNavigationBarProps) {
  return (
    <StyledMobileNavigationBar>
      <Container Column Gap="1rem">
        <Container Row>
          <LocationSelector />
        </Container>
        <Container Row>
          <SearchRestaurants Mobile />
        </Container>
      </Container>
    </StyledMobileNavigationBar>
  );
}

export default MobileNavigationBar;
