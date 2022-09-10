import { useState } from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface LinkHoverImageProps {
  text: string;
  image: string;
  subtext: string;
  url: string;
  hoverHandler: (value: boolean) => void;
  hoverState: boolean;
  margin: string;
}

interface IImageWrapper {
  active: boolean;
  clip: string;
}

const getRandomClipPath = () => {
  const ClipPath = [
    'polygon(24% 11%, 97% 4%, 100% 50%, 86% 97%, 25% 94%, 0% 50%)',
    'polygon(0% 11%, 76% 0%, 100% 39%, 77% 84%, 0% 100%, 20% 43%)',
    'polygon(0% 28%, 100% 0%, 87% 51%, 75% 100%, 28% 94%, 9% 50%)',
    'polygon(0% 10%, 76% 0%, 100% 44%, 72% 83%, 21% 100%, 14% 55%)',
  ];
  return ClipPath[Math.floor(Math.random() * ClipPath.length)];
};

const ImageWrapper = styled.div<IImageWrapper>`
  position: absolute;
  overflow: hidden;
  top: -70%;
  left: 40%;
  width: 45vh;
  height: auto;
  visibility: hidden;
  transform: scale(0);
  transition: all 0.3s ease-in-out;
  z-index: 101;
  clip-path: ${(props) => props.clip};
  &:before {
    ${(props) =>
      props.active
        ? css`
            content: ' ';
          `
        : null};
    position: absolute;
    top: -50%;
    left: 0%;
    width: calc(100% + 20rem);
    height: calc(100% + 20rem);
    pointer-events: none;
    background-position: 50%;
    background-image: url('assets/images/noise.png');
    -webkit-animation: noise 1s steps(2) infinite;
    animation: noise 1s steps(2) infinite;
    z-index: 100000;
  }
  @keyframes noise {
    0%,
    100% {
      transform: translate(0, 0);
    }
    10% {
      transform: translate(-5%, -10%);
    }
    20% {
      transform: translate(-15%, 5%);
    }
    30% {
      transform: translate(7%, -25%);
    }
    40% {
      transform: translate(-5%, 25%);
    }
    50% {
      transform: translate(-15%, 10%);
    }
    60% {
      transform: translate(15%, 0%);
    }
    70% {
      transform: translate(0%, 15%);
    }
    80% {
      transform: translate(3%, 35%);
    }
    90% {
      transform: translate(-10%, 10%);
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Subtext = styled.h5`
  margin: 0;
  font-size: 1.8vw;
  font-weight: 500;
  color: inherit;
  transform: translateY(100%);
  transition: all 0.4s ease;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;
const Heading = styled.h2`
  font-size: 5vw;
  color: inherit;
  margin: 0;
  z-index: 100;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 100;
`;

interface IStyledLinkHoverImage {
  margin: string;
}

const StyledLinkHoverImage = styled.a<IStyledLinkHoverImage>`
  color: inherit;
  text-decoration: none;
  position: relative;
  display: flex;
  height: 4.3vw;
  flex-direction: column;
  white-space: nowrap;
  width: fit-content;
  margin-left: ${(props) => props.margin};
  margin-right: ${(props) => props.margin};

  &:hover ${Content} {
    z-index: 10001;
  }

  &:hover ${Subtext} {
    transform: translateY(0%);
  }

  &:hover ${ImageWrapper} {
    visibility: visible;
    transform: scale(1);
  }
`;

const Light = styled.span`
  font-weight: 300;
`;
const Bold = styled.span`
  font-weight: 700;
  // color: rgb(255, 152, 0, 0.8);
  color: white;
`;

const getHeading = (text: string) => {
  const TextArray = text.split(' ');
  return (
    <>
      {TextArray.map((word, index) => {
        if (TextArray.length === 1) {
          return <Bold>{word}</Bold>;
        } else if (index % 2 === 0) {
          return <Light>{word}</Light>;
        } else {
          return <Bold>{word}</Bold>;
        }
      })}
    </>
  );
};

export function LinkHoverImage(props: LinkHoverImageProps) {
  const [active, setActive] = useState(false);
  return (
    <StyledLinkHoverImage
      href={props.url}
      margin={props.margin}
      onMouseEnter={() => {
        props.hoverHandler(true);
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
        props.hoverHandler(false);
      }}
    >
      <Content
        animate={
          props.hoverState && !active ? { opacity: 0.2 } : { opacity: 1 }
        }
      >
        <Heading>{getHeading(props.text)}</Heading>
        <ImageWrapper active={active} clip={getRandomClipPath()}>
          <Image src={props.image} />
        </ImageWrapper>
        <Wrapper>
          <Subtext>{props.subtext}</Subtext>
        </Wrapper>
      </Content>
    </StyledLinkHoverImage>
  );
}

export default LinkHoverImage;