import styled from 'styled-components';
import gsap from 'gsap';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import Section from 'app/components/atoms/section';
import { useEffect, useRef } from 'react';

/* eslint-disable-next-line */
export interface HomeProps {
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
  const locationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log('hello');
    gsap.to(locationRef.current, {
      backgroundColor: 'black',
      scrollTrigger: {
        trigger: locationRef.current,
        scrub: true,
        start: 'top center',
        end: 'top top',
        markers: true,
      },
    });
  }, []);
  return (
    <StyledHome>
      <Section MarginBottom="2rem">
        <Hero
          ImageOne={props.HomeImages.FoodPlate}
          Heading={props.HomeContent.Hero.Heading}
          SubHeading={props.HomeContent.Hero.SubHeading}
        />
      </Section>
      <Section Width="80%" MarginBottom="50vh">
        <Chain
          Content={props.HomeContent.HeroSectionChainsJaipur}
          Heading="Top Chain in Jaipur"
        />
      </Section>
      <Section Width="100%" MarginBottom="22rem">
        <Locality
          ref={locationRef}
          Content={props.HomeContent.HeroSectionLocalitiesJaipur}
          Margin={getRandomMargin(
            props.HomeContent.HeroSectionLocalitiesJaipur.length
          )}
        />
      </Section>
      <Section>
        <Download />
      </Section>
    </StyledHome>
  );
};

export default HomeTemplate;
