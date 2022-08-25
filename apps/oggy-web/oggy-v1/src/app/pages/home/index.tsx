import {
  StyledHome,
  SectionWrapper,
  StyledHero,
  StyledTopChains,
  StyledLocalities,
  StyledAppDownloadCTA,
} from './index.styled';
import SearchBarHero from '../../components/molecules/search-bar-hero';
import * as config from './../../config';
/* eslint-disable-next-line */
export interface HomeProps {}

const imageWidth = '100px';
const imageHeight = '100px';

export function Home(props: HomeProps) {
  const city = 'Jaipur';
  return (
    <StyledHome>
      <SectionWrapper>
        <StyledHero>
          <img src="./../../../assets/webOggyHomePageHeroSection1.jpg"></img>
          <div>
            <h1>{config.content.HomeHeroHeading}</h1>
            <SearchBarHero />
          </div>
        </StyledHero>
      </SectionWrapper>
      <SectionWrapper>
        <StyledTopChains>Top Chains</StyledTopChains>
      </SectionWrapper>
      <SectionWrapper>
        <StyledLocalities>Localities</StyledLocalities>
      </SectionWrapper>
      <SectionWrapper>
        <StyledAppDownloadCTA>Download App</StyledAppDownloadCTA>
      </SectionWrapper>
    </StyledHome>
  );
}

export default Home;
