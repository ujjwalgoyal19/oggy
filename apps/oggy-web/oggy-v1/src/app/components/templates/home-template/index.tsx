import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import Section from 'app/components/atoms/section';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import Image from 'app/components/atoms/image';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface HomeProps {
  Localities: any;
  HomeContent: any;
  HomeImages: any;
}

const StyledHome = styled.div`
  min-height: 100vh;
  height: 100%;
  transition: all 0.6s ease;
`;

const getRandomMargin = (length: number) => {
  const Margin = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 !== 0) {
      Margin.push(Math.random() * 10 + '%');
    } else {
      Margin.push(Math.random() * 5 + '%');
    }
  }
  return Margin;
};

const HomeTemplate = (props: HomeProps) => {
  gsap.registerPlugin(ScrollTrigger);
  // Hero
  const hero = useRef(null);
  const heroChild = useRef(null);
  const heroTransition = useRef(null);
  const heroImage = useRef(null);

  // Chains
  const chains = useRef(null);
  const chainsChild = useRef(null);
  const blackWrapper = useRef(null);

  // Locality
  const locality = useRef(null);
  useEffect(() => {
    const HeroTimeline = gsap.timeline({
      scrollTrigger: {
        id: 'hero',
        trigger: hero.current,
        pin: true,
        pinSpacing: false,
        scrub: 0.5,
        start: 'top top',
        end: 'bottom top',
        snap: { snapTo: 1 },
        toggleActions: 'play complete reverse pause',
      },
    });
    HeroTimeline.to(heroChild.current, {
      scale: '0.6',
      opacity: '0',
    })
      .to(
        heroTransition.current,
        {
          y: '-80%',
        },
        0
      )
      .to(
        heroImage.current,
        {
          scale: '1.3',
          rotate: '90deg',
        },
        0
      )
      .to(hero.current, { scale: '0.8', opacity: '0' });

    const ChainTimeline = gsap.timeline({
      scrollTrigger: {
        id: 'chain',
        trigger: chainsChild.current,
        start: 'top top',
        end: '105% top',
        snap: { snapTo: 1 },
        toggleActions: 'play complete reverse pause',
        markers: true,
      },
      paused: true,
    });

    ChainTimeline.to(chainsChild.current, {
      scale: '0.4',
      opacity: '0',
    }).fromTo(
      blackWrapper.current,
      {
        backgroundColor: 'white',
      },
      {
        backgroundColor: 'black',
      },
      0
    );
    const LocalityTimeline = gsap.timeline({
      scrollTrigger: {
        id: 'locality',
        trigger: locality.current,
        start: '25% top',
        end: 'bottom top',
        snap: { snapTo: 1 },
        toggleActions: 'play complete reverse pause',
      },
    });
    LocalityTimeline.to(locality.current, { pointerEvents: 'auto' });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      gsap.set('body', { clearProps: true });
      // gsap.set(locality.current, { clearProps: true });
      // gsap.set(hero.current, { clearProps: true });
      // gsap.set(heroChild.current, { clearProps: true });
      // gsap.set(heroTransition.current, { clearProps: true });
      // gsap.set(heroImage.current, { clearProps: true });
      // gsap.set(chains.current, { clearProps: true });
    };
  }, []);
  return (
    <StyledHome>
      <Container Column CenterCA>
        <Container Width="100%" Column CenterMA MarginBottom="2rem">
          <div ref={hero} style={{ zIndex: '0', paddingBottom: '300vh' }}>
            <div ref={heroChild}>
              <Container Row Height="60vh" Width="100%" MarginBottom="3rem">
                <Hero
                  Heading={props.HomeContent.Hero.Heading}
                  SubHeading={props.HomeContent.Hero.SubHeading}
                />
              </Container>
            </div>
            <div ref={heroTransition} style={{ zIndex: '1' }}>
              <Container
                Margin="0"
                CenterMA
                Height="100%"
                Width="100%"
                BG="transparent"
                style={{ borderRadius: '50%' }}
              >
                <div ref={heroImage}>
                  <Image Image={props.HomeImages.FoodPlate} />
                </div>
              </Container>
            </div>
          </div>
        </Container>
        <div ref={blackWrapper} style={{ width: '100%' }}>
          <Container Column CenterCA>
            <Container
              Height="100vh"
              Width="80%"
              MarginBottom="2rem"
              BG="inherit"
              CenterMA
            >
              <div ref={chains} style={{ width: '100%' }}>
                <Container PaddingTop="10vh">
                  <div ref={chainsChild} style={{ width: '100%' }}>
                    <Chain
                      Content={props.HomeContent.HeroSectionChainsJaipur}
                      Heading="Top Chain in Jaipur"
                    />
                  </div>
                </Container>
              </div>
            </Container>
          </Container>
          <Container
            Width="100%"
            Height="100vh"
            MarginBottom="0rem"
            BG="inherit"
          >
            <div ref={locality}>
              <Container Height="100vh" CenterCA>
                <Locality
                  Localities={props.Localities}
                  Margin={getRandomMargin(
                    props.HomeContent.HeroSectionLocalitiesJaipur.length
                  )}
                />
              </Container>
            </div>
          </Container>
        </div>
        <Section MarginTop="-16px">
          <Download />
        </Section>
      </Container>
    </StyledHome>
  );
};

export default HomeTemplate;
