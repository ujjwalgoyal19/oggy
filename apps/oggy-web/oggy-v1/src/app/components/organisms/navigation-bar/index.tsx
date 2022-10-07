import styled from 'styled-components';

import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
/* eslint-disable-next-line */
export interface NavigationBarProps {
  Logo: {
    src: string;
    width: string;
    height: string;
  };
  Width?: string;
  SearchBar?: boolean;
}

interface IStyledNavigationBar {
  Position?: string;
}

const StyledNavigationBar = styled.div<IStyledNavigationBar>`
  width: 100%;
  height: 10rem;
  z-index: 1000;
  background-color: transparent;
  position: ${(props) => props.Position};
  top: 0;
`;

export function NavigationBar(props: NavigationBarProps) {
  const device = useDeviceType();

  const location = useLocation();
  const position = location.pathname === '/' ? 'fixed' : 'static';
  const autoHide = location.pathname === '/';
  const showSearchBar = location.pathname !== '/';
  const width = location.pathname === '/' ? '80%' : '70%';
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  useEffect(() => {
    const handleScroll = () => {
      const prev = prevScrollPos;
      const currentScrollPos = window.pageYOffset;

      setVisible(prev > currentScrollPos);
      setPrevScrollPos(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <StyledNavigationBar Position={position}>
      <Container
        Column
        CenterCA
        // Padding="2rem"
        BG="transparent"
        Position={
          autoHide
            ? { Type: 'absolute', Top: `${visible ? 0 : '-100%'}` }
            : { Type: 'static' }
        }
      >
        {device.greaterThan('md') ? (
          <Container Row Width={width} SpaceBetweenMA CenterCA>
            <Container Row Width="70%" Height="fit-content" Gap="5rem">
              <Link to="/">
                <Image Image={props.Logo} />
              </Link>
              {showSearchBar ? <SearchBarHero TypeA /> : null}
            </Container>
            <Container Row EndMA Gap="5rem" Width="20%" Height="fit-content">
              <Link to="/login">Sign In</Link>
              <Link to="/register">Register</Link>
            </Container>
          </Container>
        ) : (
          <SearchBarHero TypeB />
        )}
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
