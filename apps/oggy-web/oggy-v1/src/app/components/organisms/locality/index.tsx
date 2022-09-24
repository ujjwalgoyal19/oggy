import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import Heading from 'app/components/atoms/heading';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import config from 'app/config';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface LocalityProps {
  Localities: any;
  Margin: string[];
}

const StyledLocality = styled.ul`
  box-sizing: border-box;
  min-height: 100vh;
  color: white;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
    // const ST = ScrollTrigger.create();
    const LocalityTimeline = gsap.timeline({
      // scrollTrigger: ST.vars,
      scrollTrigger: {
        id: 'ST',
        trigger: locality.current,
        scrub: true,
        pin: true,
        start: 'top top',
        end: '100% top',
        snap: { snapTo: [1] },
      },
      duration: 10,
    });
    LocalityTimeline.to(locality.current, {
      backgroundColor: 'black',
      duration: 2,
    })
      .fromTo(
        heading.current,
        {
          scale: 0.5,
          opacity: 0,
          pointerEvents: 'none',
        },
        {
          scale: 1,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'power1.out',
          duration: 6,
        }
      )
      .to(heading.current, {
        opacity: 0,
      })
      .fromTo('.locality_list', { opacity: 0 }, { opacity: 1 });

    return () => {
      ScrollTrigger.getById('ST')?.kill();
    };
  }, []);

  const dispatch = useDispatch();

  const getRestaurantLocalityHandler = (locality: any) => {
    dispatch(
      searchActions.changeLocation({
        type: 'Locality',
        id: locality.locality_id,
        name: locality.locality_name,
      })
    );
  };

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
      <Container
        ClassName="locality_list"
        Row
        BG="black"
        Gap="2rem"
        Wrap
        SpaceBetweenMA
        Height="fit-content"
      >
        {Object.values(props.Localities).map((locality: any, index) => {
          return (
            <LinkHoverImage
              key={index}
              Key={index}
              text={locality.locality_name}
              image="assets/images/malviyaNagar.jpg"
              url="search"
              subtext={locality.res_count + ' places'}
              hoverHandler={hoverHandler}
              hoverState={overlay}
              clickHandler={() => getRestaurantLocalityHandler(locality)}
              margin={props.Margin[index]}
            />
          );
        })}
      </Container>
    </StyledLocality>
  );
};

export default Locality;
