import Container from 'app/components/atoms/container';
import LocationSelector from 'app/components/molecules/location-selector';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import styled from 'styled-components';
import Filters from '../filters';

/* eslint-disable-next-line */
export interface MobileNavigationBarProps {}

const StyledMobileNavigationBar = styled.div``;

export function MobileNavigationBar(props: MobileNavigationBarProps) {
  return (
    <StyledMobileNavigationBar>
      <Container Column>
        <Container Row>
          <LocationSelector />
        </Container>
        <Container Row>
          <SearchRestaurants />
        </Container>
        <Container Row>
          <Filters />
        </Container>
      </Container>
    </StyledMobileNavigationBar>
  );
}

export default MobileNavigationBar;
