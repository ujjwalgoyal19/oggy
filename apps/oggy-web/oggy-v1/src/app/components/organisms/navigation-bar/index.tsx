import styled from 'styled-components';

import Image from 'app/components/atoms/image';
import { Link, useLocation } from 'react-router-dom';
import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import Images from 'app/constants/images';
import LocationSelector from 'app/components/molecules/location-selector';
import Separator from 'app/components/atoms/separator';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import Text from 'app/components/atoms/text';
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
  const location = useLocation();

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
            location.pathname === '/search'
              ? 'var(--search-page-width)'
              : 'var(--restaurant-page-width)'
          }
          SpaceBetweenMA
          CenterCA
        >
          <Container Row Width="70%" Height="fit-content" Gap="5rem" CenterCA>
            <Link to="/">
              <Container Height="6rem" style={{ overflow: 'hidden' }}>
                <Image Src={Images.Logo.Oggy} />
              </Container>
            </Link>
            <Container
              Row
              Width="65rem"
              Height="4.5rem"
              Border={{ Style: 'Solid', L2: true }}
              Shape="CS0"
              CenterCA
              style={{ overflow: 'initial' }}
            >
              <Container Width="30%" Height="fit-content">
                <LocationSelector Desktop Normal />
              </Container>
              <Container Width="fit-content" Height="60%">
                <Separator Color="#ffffff" ColorType="light" Vertical />
              </Container>
              <Container Width="70%" Height="fit-content">
                <SearchRestaurants Desktop />
              </Container>
            </Container>
          </Container>
          <Container Row EndMA Gap="5rem" Width="20%" Height="fit-content">
            <Link to="/login">
              <Text H4 N>
                Log In
              </Text>
            </Link>
            <Link to="/register">
              <Text H4 Color="Primary" N>
                Sign Up
              </Text>
            </Link>
          </Container>
        </Container>
      </Container>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
