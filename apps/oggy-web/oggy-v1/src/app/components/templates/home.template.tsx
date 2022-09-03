import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import * as config from 'app/config';

/* eslint-disable-next-line */
export interface HomeProps {
  HomeContent: any;
  HomeImages: any;
}

const StyledHome = styled.div`
  min-height: 100vh;
  height: 100%;
  color: black;
  /* display: grid; */
`;

interface ISectionWrapper {
  Width?: string;
  MarginBottom?: string;
  MarginTop?: string;
  MarginRight?: string;
  MarginLeft?: string;
}

const SectionWrapper = styled.section<ISectionWrapper>`
  font-family: Raleway;
  width: ${(props) => props.Width || 'auto'};
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => props.MarginBottom || 'auto'};
  margin-top: ${(props) => props.MarginTop || 'auto'};
  margin-left: ${(props) => props.MarginLeft || 'auto'};
  margin-right: ${(props) => props.MarginRight || 'auto'};
`;

const StyledAppDownloadCTA = styled.div``;

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
  return (
    <StyledHome>
      <SectionWrapper MarginBottom="2rem">
        <Hero
          ImageOne={props.HomeImages.FoodPlate}
          Heading={props.HomeContent.Hero.Heading}
          SubHeading={props.HomeContent.Hero.SubHeading}
        />
      </SectionWrapper>
      <SectionWrapper Width="80%" MarginBottom="22rem">
        <Chain
          Content={config.content.HeroSectionChainsJaipur}
          Heading="Top Chain in Jaipur"
        />
      </SectionWrapper>
      <SectionWrapper Width="100%" MarginBottom="22rem">
        <Locality
          Content={config.content.HeroSectionLocalitiesJaipur}
          Margin={getRandomMargin(
            config.content.HeroSectionLocalitiesJaipur.length
          )}
        />
      </SectionWrapper>
      <SectionWrapper>
        <Download />
      </SectionWrapper>
    </StyledHome>
  );
};

export default HomeTemplate;
