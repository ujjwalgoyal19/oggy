import styled from 'styled-components';
import React from 'react';

import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
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
  visible: boolean;
  width?: string;
}

const StyledNavigationBar = styled.div<IStyledNavigationBar>`
  font-family: Raleway;
  position: fixed;
  max-height: 6vh;
  width: ${(props) => props.width || '70%'};
  display: grid;
  top: ${(props) => (!props.visible ? '-10%' : '2%')};
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease;
  grid-template-columns: repeat(12, 1fr);
  z-index: 1000;
`;

const Left = styled.div`
  grid-column: 1 / 7;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5rem;
`;
const Right = styled.div`
  grid-column: 7 / 13;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 5rem;
`;

export function NavigationBar(props: NavigationBarProps) {
  const [visible, setVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(window.pageYOffset);
  React.useEffect(() => {
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
    <StyledNavigationBar visible={visible} width={props.Width}>
      <Left>
        <Image Image={props.Logo} />
        {props.SearchBar ? <SearchBarHero type="combined" /> : null}
      </Left>
      <Right>
        <a>Sign In</a>
        <a>Register</a>
      </Right>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
