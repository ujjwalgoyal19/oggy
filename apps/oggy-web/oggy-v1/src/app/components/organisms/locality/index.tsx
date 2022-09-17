import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import Heading from 'app/components/atoms/heading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import config from 'app/config';
import { NONAME } from 'dns';

/* eslint-disable-next-line */
export interface LocalityProps {
  Content: {
    name: string;
    totalRestaurant: string;
    image: string;
    url: string;
  }[];
  Margin: string[];
}

const StyledLocality = styled.ul`
  min-height: 100vh;
  padding: 0;
  color: white;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.388889vw;
  position: relative;
`;

const HeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  overflow: hidden;
  height: fit-content;
`;

const HeadingWrapperChild = styled.div``;

const Locality = (props: LocalityProps) => {
  const heading = useRef<HTMLDivElement>(null);
  const locality = useRef<HTMLUListElement>(null);

  const [overlay, setOverlay] = useState(false);
  const hoverHandler = (value: boolean) => {
    setOverlay(value);
  };
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const LocalityTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: locality.current,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '100% top',
        snap: { snapTo: [1] },
        markers: true,
      },
      duration: 6,
    });
    LocalityTimeline.to(locality.current, {
      backgroundColor: 'black',
      duration: 4,
    })
      .fromTo(
        heading.current,
        {
          scale: 0.5,
          opacity: 0,
          pointerEvents: 'none',
          duration: 4,
        },
        {
          scale: 1,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'power1.out',
        },
        '0.3'
      )
      .to(heading.current, {
        opacity: 0,
      })
      .fromTo('.locality_item', { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <StyledLocality ref={locality}>
      <HeadingWrapper>
        <HeadingWrapperChild ref={heading}>
          <Heading
            Heading={config.components.heading.hero}
            HeadingColor="inherit"
            HeadingSize="15rem"
            MarginBottom="0"
            MarginTop="0"
          >
            Localities
          </Heading>
        </HeadingWrapperChild>
      </HeadingWrapper>
      {props.Content.map((locality, index) => {
        return (
          <LinkHoverImage
            className="locality_item"
            key={index}
            text={locality.name}
            image={locality.image}
            url={locality.url}
            subtext={locality.totalRestaurant + ' places'}
            hoverHandler={hoverHandler}
            hoverState={overlay}
            margin={props.Margin[index]}
          />
        );
      })}
    </StyledLocality>
  );
};

export default Locality;
