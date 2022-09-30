import styled from 'styled-components';
import SearchBarHero from 'app/components/molecules/search-bar';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
/* eslint-disable-next-line */
export interface HeroProps {
  Heading: string;
  SubHeading: string;
}

const StyledHero = styled.section`
  height: 100%;
  width: 100%;
  display: block;
  height: fit-content;
`;

export function Hero(props: HeroProps) {
  return (
    <StyledHero>
      <Container BG="transparent" Row Height="fit-content">
        <Container Column Gap="6vh" Width="100%" Height="fit-content" CenterCA>
          <Text D2 EB style={{ textAlign: 'center' }}>
            <Text>The Best Discounts in</Text>
            <br />
            <Text Color="Primary">Your City</Text>
          </Text>
          <Text H4 L style={{ textAlign: 'center' }}>
            {props.SubHeading}
          </Text>
          <Container Row Width="65rem">
            {/* <SearchBarHero type="combined" /> */}
          </Container>
        </Container>
      </Container>
    </StyledHero>
  );
}

export default Hero;
