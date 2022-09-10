import styled from 'styled-components';
import config from 'app/config';
import Heading from 'app/components/atoms/heading';
import SearchBarHero from 'app/components/molecules/search-bar';
import Image from 'app/components/atoms/image';
/* eslint-disable-next-line */
export interface HeroProps {
  ImageOne: {
    src: string;
    width: string;
    height: string;
  };
  Heading: string;
  SubHeading: string;
}

const StyledHero = styled.section`
  // background-color: #f7f7f7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

const Left = styled.div`
  width: 38%;
  margin-left: 10%;
  height: 100%;
`;
const Right = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const Canvas = styled.div`
  // background-color: #f6412d;
  background-color: #ff9800;
  position: relative;
  display: block;
  width: 50%;
  height: 70%;
  border-radius: 3rem 0rem 0rem 3rem;
  // border-radius: 50%;
  z-index: 100;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    background: url('assets/images/texture.webp') repeat;
    opacity: 0.1;
    z-index: 101;
  }
  img {
    position: absolute;
    display: block;
    top: 50%;
    // left: -50%;
    left: -50%;
    transform: translateY(-50%) !important;
    border-radius: 50%;
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.4);
    z-index: 102;
  }
`;

const HeroHeadingColor = styled.span`
  color: #ff9800;
`;

export function Hero(props: HeroProps) {
  return (
    <StyledHero>
      <Left>
        <Heading
          Heading={config.components.heading.hero}
          HeadingColor="#1D1D1B"
          MarginBottom="8rem"
        >
          <span>The Best Discounts in </span>
          <HeroHeadingColor>Your City</HeroHeadingColor>
        </Heading>
        <Heading
          Heading={config.components.heading.secondary}
          HeadingColor="#1D1D1B"
          MarginBottom="4.5rem"
        >
          {props.SubHeading}
        </Heading>
        <SearchBarHero type="combined" />
      </Left>
      <Right>
        <Canvas>
          <Image Image={props.ImageOne} />
        </Canvas>
      </Right>
    </StyledHero>
  );
}

export default Hero;
