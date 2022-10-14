import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import Image from 'app/components/atoms/image';
import Container from 'app/components/atoms/container';
import Images from 'app/constants/images';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface HomeProps {
  HomeContent: any;
}

const StyledHome = styled.div`
  min-height: 100vh;
  height: 100%;
  transition: all 0.6s ease;

  .hero__transition {
    transform: translateY(60%);
  }
`;

const HomeTemplate = (props: HomeProps) => {
  const device = useDeviceType();
  return (
    <StyledHome>
      {device.greaterThan('md') && (
        <Container Column CenterCA>
          <Container
            Height="calc(100 * var(--vh))"
            Width="100%"
            Column
            Index={1}
            PaddingTop="calc(15 * var(--vh))"
          >
            <Container Width="100%" Height="fit-content">
              <Hero
                Heading={props.HomeContent.Hero.Heading}
                SubHeading={props.HomeContent.Hero.SubHeading}
              />
            </Container>
          </Container>
          <Container
            Height="fit-content"
            Column
            CenterCA
            BG="white"
            Index={2}
            MarginBottom={device.getHeight(20)}
          >
            <Container Width="100%" CenterMA>
              <Chain Content={props.HomeContent.HeroSectionChainsJaipur} />
            </Container>
          </Container>
          <Container
            ClassName="snap enter enterBack locality"
            Height="fit-content"
            BG="white"
            Column
            Index={2}
            MarginBottom={device.getHeight(20)}
          >
            <Container ClassName="locality__child" BG="transparent" CenterCA>
              <Locality />
            </Container>
          </Container>
          <Container
            Height="calc(100 * var(--vh))"
            ClassName="snap enter enterBack download"
            Index={2}
          >
            <Download />
          </Container>
        </Container>
      )}

      {device.lessThan('md') && (
        <Container Column CenterCA>
          <Container
            ClassName="hero"
            // Height={device.getHeight(100)}
            // Width={device.getWidth(100)}
            Height="calc(100* var(--vh))"
            Width="calc(100* var(--vw))"
            Column
            Index={0}
            Position={{ Type: 'sticky', Top: '0' }}
            OverflowHideY
          >
            <Container
              Row
              // Height={device.getHeight(100)}
              Height="calc(100* var(--vh))"
              Width="100%"
              Position={{ Type: 'relative' }}
              PaddingTop="15%"
            >
              <Container
                ClassName="hero__child"
                Width="100%"
                Height="fit-content"
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
                Position={{ Type: 'absolute', Bottom: '0%' }}
              >
                <Container
                  ClassName="hero__image"
                  Shape="Circle"
                  Width={device.getWidth(80)}
                  Height="auto"
                >
                  <Image
                    Width="100%"
                    Height="100%"
                    Src={Images.HomePage.FoodPlate}
                  />
                </Container>
              </Container>
            </Container>
          </Container>
          <Container
            Column
            BG="white"
            ClassName="content"
            Height="calc(100* var(--vh))"
            Position={{ Type: 'sticky', Top: '0' }}
          >
            <Container
              ClassName="chains"
              Height="fit-content"
              Column
              CenterCA
              Index={2}
            >
              <Container Width="100%" PaddingTop="3rem">
                <Chain Content={props.HomeContent.HeroSectionChainsJaipur} />
              </Container>
            </Container>
            <Container
              ClassName="locality"
              Height="fit-content"
              Column
              Index={2}
            >
              <Container ClassName="locality__child" BG="transparent" CenterCA>
                <Locality />
              </Container>
            </Container>
          </Container>
          <Container
            Height={`calc(95 * var(--vh))`}
            ClassName="download"
            Index={3}
            Position={{ Type: 'sticky', Top: '4rem' }}
            Shape="CS2"
            style={{
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }}
            OverflowHide
          >
            <Download />
          </Container>
        </Container>
      )}
    </StyledHome>
  );
};

export default HomeTemplate;
