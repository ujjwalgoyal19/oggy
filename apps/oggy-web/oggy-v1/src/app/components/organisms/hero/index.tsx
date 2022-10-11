import styled from 'styled-components';
import SearchBarHero from 'app/components/molecules/search-bar';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import SearchRestaurants from 'app/components/molecules/search-restaurants';
import LocationSelector from 'app/components/molecules/location-selector';
/* eslint-disable-next-line */
export interface HeroProps {
  Heading: string;
  SubHeading: string;
}

const StyledHero = styled.section`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: block;
  height: fit-content;
`;

export function Hero(props: HeroProps) {
  const device = useDeviceType();
  return (
    <StyledHero>
      <Container BG="transparent" Row Height="fit-content">
        <Container Column Gap="6vh" Width="100%" Height="fit-content" CenterCA>
          <Container Row Width="fit-content">
            <Text
              D2={device.greaterThan('md')}
              D5={!device.greaterThan('md')}
              EB
              style={{ textAlign: 'center' }}
            >
              <Text>The Best Discounts in</Text>
              <br />
              <Text Color="Primary">Your City</Text>
            </Text>
          </Container>
          <Container Row Width="fit-content">
            <Text H4 L style={{ textAlign: 'center' }}>
              {props.SubHeading}
            </Text>
          </Container>
          {device.greaterThan('md') && (
            <Container Row Width="65rem" Height="4.5rem">
              <SearchBarHero TypeA />
            </Container>
          )}
          {device.lessThan('md') && (
            <Container Column Width="calc(85 * var(--vw))" Gap="2rem">
              <Container Row Height="4.5rem">
                <LocationSelector Mobile Normal />
              </Container>
              <Container Row Height="4.5rem">
                <SearchRestaurants Mobile />
              </Container>
            </Container>
          )}
        </Container>
      </Container>
    </StyledHero>
  );
}

export default Hero;
