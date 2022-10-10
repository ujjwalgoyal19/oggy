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
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
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
    if (pos < 50) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  };

  const mobileNavLocation = document.querySelector('.mobile-nav__location');

  useEffect(() => {
    const hide = gsap.timeline({
      paused: true,
    });
    mobileNavLocation &&
      hide.to('.mobile-nav__border', {
        y: `-${mobileNavLocation.clientHeight + 10}`,
        duration: 0.1,
        ease: 'Power3.easeInOut',
      });

    const show = gsap.timeline({
      paused: true,
    });
    mobileNavLocation &&
      show.to('.mobile-nav__border', {
        y: 0,
        duration: 0.1,
        ease: 'Power3.easeInOut',
      });

    if (position) {
      hide.play();
    } else {
      show.play();
    }
  }, [position]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (location.pathname === '/search') {
    return (
      <StyledMobileNavigationBar>
        <Container
          ClassName="mobile-nav__border"
          Column
          Gap="1rem"
          BG="white"
          Elevation={(position && { L1: true }) || undefined}
          Padding="1rem 1rem 1rem 1rem"
        >
          <Container Row ClassName="mobile-nav__location">
            <LocationSelector Mobile />
          </Container>
          <Container Row ClassName="mobile-nav__search">
            <SearchRestaurants Mobile />
          </Container>
        </Container>
      </StyledMobileNavigationBar>
    );
  } else {
    return null;
  }
}

export default MobileNavigationBar;
