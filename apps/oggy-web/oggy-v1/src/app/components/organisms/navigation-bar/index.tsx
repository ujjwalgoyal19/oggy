import styled from 'styled-components';

import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import Images from 'app/constants/images';
/* eslint-disable-next-line */
export interface NavigationBarProps {
  Logo: string;
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
  const showSearchBar = location.pathname !== '/';

  if (
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/'
  ) {
    return null;
  }

  return (
    <StyledNavigationBar>
      <Container Column CenterCA BG="transparent">
        <Container
          Row
          Width={
            (device.greaterThan('xl') && 'calc(70 * var(--vw) )') ||
            (device.greaterThan('md') && 'calc(90 * var(--vw) )') ||
            (device.lessThan('md') && '90%')
          }
          SpaceBetweenMA
          CenterCA
        >
          <Container Row Width="70%" Height="fit-content" Gap="5rem">
            <Link to="/">
              <Container Height="6rem" style={{ overflow: 'hidden' }}>
                <Image Src={Images.Logo.Oggy} />
              </Container>
            </Link>
            {showSearchBar ? <SearchBarHero TypeA /> : null}
          </Container>
          <Container Row EndMA Gap="5rem" Width="20%" Height="fit-content">
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
          </Container>
        </Container>
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
