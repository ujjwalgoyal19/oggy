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
import Images from 'app/constants/images';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface HomeProps {
  Localities: any;
  HomeContent: any;
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
  const device = useDeviceType();
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
          start: `${device.getHeight(1)} bottom`,
          end: `${device.getHeight(1)} top`,
          onEnter: () => goToSection(heights[i] - 1),
        });
      }
      if (panel.classList.contains('enterBack')) {
        ScrollTrigger.create({
          id: 'enterBack',
          trigger: eachPanel as gsap.DOMTarget,
          start: `${device.getHeight(99)} bottom`,
          end: `${device.getHeight(99)} top`,
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
        scrub: 0.6,
        start: 'top top',
        end: `bottom top`,
        snap: { snapTo: 1 },
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
          y: '-80%',
        },
        0
      )
      .to('.hero__image', { rotate: '90deg' }, 0)
      .to('.hero__image', { opacity: '0', scale: '0.5' }, 0.5);

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
          Height={`calc(200 * var(--vh))`}
          Width="100%"
          Column
          Position={{ Type: 'relative' }}
          Index={1}
        >
          <Container
            ClassName="hero__child"
            Row
            Height={`calc(100 * var(--vh))`}
            Width="100%"
            PaddingTop={(device.greaterThan('md') && '8%') || '35%'}
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
            Position={{ Type: 'absolute', Top: '33%' }}
          >
            <Container
              ClassName="hero__image"
              Width="fit-content"
              Shape="Circle"
              Height={`calc(70 * var(--vw))`}
            >
              <Image Src={Images.HomePage.FoodPlate} />
            </Container>
          </Container>
        </Container>
        <Container
          ClassName="snap enterBack chains"
          Height={`calc(100 * var(--vh))`}
          Column
          CenterCA
          BG="white"
          Index={2}
        >
          <Container
            Width={(device.greaterThan('md') && '80%') || '100%'}
            PaddingTop={device.greaterThan('md') ? '6vh' : '20%'}
            CenterMA
          >
            <Chain
              Content={props.HomeContent.HeroSectionChainsJaipur}
              Heading="Top Chain in Jaipur"
            />
          </Container>
        </Container>
        <Container
          ClassName="snap enter enterBack locality"
          Height={`calc(100 * var(--vh))`}
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
        <Container
          Height={`calc(100 * var(--vh))`}
          ClassName="snap enter enterBack download"
        >
          <Download />
        </Container>
      </Container>
    </StyledHome>
  );
};

export default HomeTemplate;
