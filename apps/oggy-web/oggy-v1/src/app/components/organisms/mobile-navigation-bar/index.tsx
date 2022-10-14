import Container from 'app/components/atoms/container';
import LocationSelector from 'app/components/molecules/location-selector';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MobileNavigationBarProps {}

const StyledMobileNavigationBar = styled.div`
  /* position: sticky; */
  /* top: 0; */
  width: 100%;
  z-index: 100;
  .mobile-nav__border {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export function MobileNavigationBar(props: MobileNavigationBarProps) {
  const [position, setPosition] = useState(false);
  const location = useLocation();
  const handleScroll = () => {
    const pos = window.scrollY;
    if (pos < 100) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  const mobileNavLocation = document.querySelector('.mobile-nav__location');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (location.pathname === '/search') {
    return (
      <>
        <Container
          Row
          ClassName="mobile-nav__location"
          Padding="1rem"
          Position={{ Type: 'sticky', Top: '0' }}
          Index={100}
          BG="white"
        >
          <LocationSelector Condensed Mobile />
        </Container>
        <Container
          Row
          ClassName="mobile-nav__search"
          Position={
            (position && { Type: 'sticky', Top: '0' }) || {
              Type: 'sticky',
              Top: `${mobileNavLocation && mobileNavLocation?.clientHeight}px`,
            }
          }
          Padding="1rem"
          Index={101}
          BG="white"
        >
          <SearchRestaurants Mobile />
        </Container>
      </>
    );
  } else {
    return null;
  }
}

export default MobileNavigationBar;
