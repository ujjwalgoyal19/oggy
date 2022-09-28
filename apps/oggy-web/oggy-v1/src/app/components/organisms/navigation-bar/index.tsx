import styled, { css } from 'styled-components';

import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  type: string;
  visible?: boolean;
  width?: string;
}

const StyledNavigationBar = styled.div<IStyledNavigationBar>`
  font-family: Raleway;
  width: ${(props) => props.width || '70%'};
  margin: auto;
  margin-bottom: 5rem;
  padding: 2rem;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  z-index: 1000;
  ${(props) =>
    props.type === 'hero' &&
    css`
      box-sizing: border-box;
      margin: 0;
      padding-left: 10%;
      padding-right: 10%;
      width: 100%;
      // background-color: white;
      position: fixed;
      top: ${!props.visible ? '-10%' : '0%'};
      left: 50%;
      transform: translateX(-50%);
      transition: all 0.2s ease;
    `}
`;

const Left = styled.div`
  grid-column: 1 / 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 5rem;
`;
const Right = styled.div`
  grid-column: 10 / 13;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 5rem;
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
    // <StyledNavigationBar visible={visible} width={props.Width}>
    <StyledNavigationBar type={type} visible={visible} width={width}>
      <Left>
        <Image Image={props.Logo} />
        {type === 'normal' ? <SearchBarHero type="combined" /> : null}
      </Left>
      <Right>
        <Link to="/signin">Sign In</Link>
        <Link to="/register">Register</Link>
      </Right>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
