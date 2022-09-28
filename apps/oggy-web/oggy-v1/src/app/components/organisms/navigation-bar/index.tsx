import styled, { css } from 'styled-components';

import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'app/components/atoms/container';
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

const StyledNavigationBar = styled.div`
  width: 100%;
  height: 10rem;
  z-index: 1000;
  background-color: transparent;
  position: sticky;
  top: 0;
`;

export function NavigationBar(props: NavigationBarProps) {
  const location = useLocation();
  const type = location.pathname === '/' ? 'hero' : 'normal';
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
    <StyledNavigationBar>
      <Container
        Column
        CenterCA
        Padding="2rem"
        BG="transparent"
        Position={{ Type: 'absolute', Top: `${visible ? 0 : '-100%'}` }}
      >
        <Container Row Width={width} SpaceBetweenMA CenterCA>
          <Container Row Height="fit-content">
            <Link to="/">
              <Image Image={props.Logo} />
            </Link>
            {type === 'normal' ? <SearchBarHero type="combined" /> : null}
          </Container>
          <Container Row EndMA Gap="5rem" Height="fit-content">
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
          </Container>
        </Container>
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
