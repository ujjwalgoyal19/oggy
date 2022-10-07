import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';
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
  gsap.registerPlugin(ScrollToPlugin);
  useEffect(() => {
    const sections = gsap.utils.toArray('.snap');

    let height = 0;
    const heights = sections.map((eachPanel) => {
      const h = (eachPanel as Element).getBoundingClientRect().height;
      height += h;
      return height - h;
    });

    const goToSection = (i: number) => {
      gsap.to(window, {
        scrollTo: {
          y: i,
          autoKill: false,
        },
        ease: 'Power3.easeInOut',
        duration: 1.26,
      });
    };
    ScrollTrigger.defaults({
      // markers: true,
    });

    sections.forEach((eachPanel, i) => {
      const panel = eachPanel as Element;
      if (panel.classList.contains('enter')) {
        ScrollTrigger.create({
          id: 'enter',
          trigger: eachPanel as gsap.DOMTarget,
          start: '1vh bottom',
          end: '1vh top',
          onEnter: () => goToSection(heights[i] - 1),
        });
      }
      if (panel.classList.contains('enterBack')) {
        ScrollTrigger.create({
          id: 'enterBack',
          trigger: eachPanel as gsap.DOMTarget,
          start: '99% bottom',
          end: '99% top',
          onEnterBack: () => goToSection(heights[i] + 1),
        });
      }
    });

    //* Custom Timelines for creating animation

    //* Locality Timeline */
    const LocalityTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.locality',
        start: 'start 50%',
        end: 'end start',
        toggleActions: 'play complete reverse reset',
      },
    });
    LocalityTimeline.to('.locality', {
      backgroundColor: 'black',
    }).fromTo(
      '.locality__child',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      { opacity: 1, pointerEvents: 'auto' },
      0
    );

    //* Hero Timeline */
    const HeroTimeline = gsap.timeline({
      scrollTrigger: {
        id: 'hero',
        pin: true,
        pinSpacing: false,
        trigger: '.hero',
        scrub: 1,
        start: 'top top',
        end: '100% top',
        snap: { snapTo: 1 },
        // markers: true,
        toggleActions: 'play complete reverse pause',
      },
    });
    HeroTimeline.to('.hero__child', {
      scale: 0.8,
      opacity: '0',
    })
      .to(
        '.hero__transition',
        {
          y: '-100%',
          scale: '1.2',
        },
        0
      )
      .to('.hero__image', { rotate: '180deg' }, 0)
      .to('.hero__image', { opacity: '0', scale: '0.5' });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      gsap.to(window, { scrollTo: { y: 0 } });
    };
  }, []);
  return (
    <StyledHome>
      <Container Column CenterCA>
        <Container
          ClassName="snap hero"
          Height="200vh"
          Width="100%"
          Column
          Position={{ Type: 'relative' }}
        >
          <Container
            ClassName="hero__child"
            Row
            Height="100vh"
            Width="100%"
            PaddingTop="15vh"
          >
            <Hero
              Heading={props.HomeContent.Hero.Heading}
              SubHeading={props.HomeContent.Hero.SubHeading}
            />
          </Container>
          <Container
            ClassName="hero__transition"
            Margin="0"
            CenterMA
            Height="fit-content"
            Width="100%"
            BG="transparent"
            Padding="1rem"
            Position={{ Type: 'absolute', Top: '39%' }}
          >
            <Container
              ClassName="hero__image"
              Width="fit-content"
              Shape="Circle"
            >
              <Image Image={props.HomeImages.FoodPlate} />
            </Container>
          </Container>
        </Container>
        <Container
          ClassName="snap enterBack chains"
          Height="100vh"
          Column
          CenterCA
          BG="white"
        >
          <Container Width="80%" CenterMA>
            <Container PaddingTop="10vh">
              <Chain
                Content={props.HomeContent.HeroSectionChainsJaipur}
                Heading="Top Chain in Jaipur"
              />
            </Container>
          </Container>
        </Container>
        <Container
          ClassName="snap enter enterBack locality"
          Height="100vh"
          Column
        >
          <Container ClassName="locality__child" BG="transparent" CenterCA>
            <Locality
              Localities={props.Localities}
              Margin={getRandomMargin(
                props.HomeContent.HeroSectionLocalitiesJaipur.length
              )}
            />
          </Container>
        </Container>
        <Container ClassName="snap enter enterBack download" Height="100vh">
          <Download />
        </Container>
      </Container>
    </StyledHome>
  );
};

export default HomeTemplate;
