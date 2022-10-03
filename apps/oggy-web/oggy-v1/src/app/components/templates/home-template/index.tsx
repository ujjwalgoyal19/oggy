import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
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
    const sections = gsap.utils.toArray('.panel');

    let height = 0;
    const heights = sections.map((eachPanel) => {
      const h = (eachPanel as Element).getBoundingClientRect().height;
      height += h;
      return height - h;
    });
    console.log(heights);

    const goToSection = (i: number) => {
      console.log(i);
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
      ScrollTrigger.create({
        trigger: eachPanel as gsap.DOMTarget,
        start: '1% bottom',
        end: '1% top',
        onEnter: () => goToSection(heights[i] - 1),
      });
      ScrollTrigger.create({
        trigger: eachPanel as gsap.DOMTarget,
        start: '99% bottom',
        end: '99% top',
        onEnterBack: () => goToSection(heights[i] + 1),
      });
    });
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
    // const HeroTimeline = gsap.timeline({
    //   scrollTrigger: {
    //     id: 'hero',
    //     trigger: '.hero',
    //     pin: true,
    //     pinSpacing: false,
    //     markers: true,
    //     scrub: 1,
    //     start: 'top top',
    //     end: 'bottom top',
    //     snap: { snapTo: 1 },
    //     toggleActions: 'play complete reverse pause',
    //   },
    // });
    // HeroTimeline.to('.hero__child', {
    //   scale: '0.6',
    //   opacity: '0',
    // })
    //   .to(
    //     '.hero__transition',
    //     {
    //       y: '-100%',
    //       rotate: '90deg',
    //     },
    //     0
    //   )
    //   .to('.hero__image', { opacity: '0' });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill(true));
      gsap.to(window, { scrollTo: { y: 0 } });
    };
  }, []);
  return (
    <StyledHome>
      <Container Column CenterCA>
        <Container ClassName="panel hero" Height="200vh" Width="100%" Column>
          <Container
            ClassName="hero__child"
            Row
            Height="75vh"
            Width="100%"
            MarginBottom="3rem"
            CenterCA
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
            style={{ borderRadius: '50%' }}
          >
            <Container ClassName="hero__image" Width="fit-content">
              <Image Image={props.HomeImages.FoodPlate} />
            </Container>
          </Container>
        </Container>
        <Container ClassName="panel chains" Height="100vh" Column CenterCA>
          <Container Width="80%" CenterMA>
            <Container PaddingTop="10vh">
              <Chain
                Content={props.HomeContent.HeroSectionChainsJaipur}
                Heading="Top Chain in Jaipur"
              />
            </Container>
          </Container>
        </Container>
        <Container ClassName="panel locality" Height="100vh" Column>
          <Container ClassName="locality__child" BG="transparent" CenterCA>
            <Locality
              Localities={props.Localities}
              Margin={getRandomMargin(
                props.HomeContent.HeroSectionLocalitiesJaipur.length
              )}
            />
          </Container>
        </Container>
        <Container ClassName="panel download" Height="100vh">
          <Download />
        </Container>
      </Container>
    </StyledHome>
  );
};

export default HomeTemplate;
