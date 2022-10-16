import styled from 'styled-components';

import Hero from 'app/components/organisms/hero';
import Chain from 'app/components/organisms/chain';
import Locality from 'app/components/organisms/locality';
import Download from 'app/components/organisms/download';
import Image from 'app/components/atoms/image';
import Container from 'app/components/atoms/container';
import Images from 'app/constants/images';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { Link } from 'react-router-dom';

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
      <Container
        Row
        Width="calc(100 * var(--vw))"
        Position={{ Type: 'fixed', Top: '0' }}
        Height="fit-content"
        PaddingTop="2rem"
        PaddingBottom="2rem"
        BG="white"
        CenterMA
        Index={1}
      >
        <Container
          Width={
            (device.greaterThan('md') && 'calc(80 * var(--vw))') ||
            'calc(80 * var(--vw))'
          }
          Height="fit-content"
          CenterCA
          SpaceBetweenMA
        >
          <Container Height="min(6vh, 7vw)" Width="fit-content">
            <Image Src={Images.Logo.Oggy} />
          </Container>
          <Container
            Row
            EndMA
            Gap="5rem"
            Width="fit-content"
            Height="fit-content"
          >
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
          </Container>
        </Container>
      </Container>
      {device.greaterThan('md') && (
        <Container Column CenterCA>
          <Container
            MinHeight="fit-content"
            Height="calc(100 * var(--vh))"
            Width="100%"
            Column
            Index={0}
            PaddingTop="calc(20 * var(--vh))"
            Position={{ Type: 'sticky', Top: '0' }}
          >
            <Container Width="100%" Height="fit-content">
              <Hero
                Heading={props.HomeContent.Hero.Heading}
                SubHeading={props.HomeContent.Hero.SubHeading}
              />
            </Container>
          </Container>
          <Container
            MarginTop="calc(10 * var(--vh))"
            MinHeight="calc(100 * var(--vh))"
            Height="fit-content"
            Column
            CenterCA
            BG="white"
            Index={2}
          >
            <Container Width="80%" CenterMA>
              <Chain Content={props.HomeContent.HeroSectionChainsJaipur} />
            </Container>
          </Container>
          <Container
            ClassName="locality"
            MinHeight="calc(100 * var(--vh))"
            CenterMA
            Height="fit-content"
            BG="white"
            Column
            Index={2}
            Position={{ Type: 'sticky', Top: '0' }}
          >
            <Locality />
          </Container>
          <Container
            MarginTop="calc(10 * var(--vh))"
            MinHeight="calc(90 * var(--vh))"
            Height="fit-content"
            ClassName="download"
            Index={2}
            Shape="CS3"
            OverflowHide
            BG="Black"
            style={{
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }}
          >
            <Download />
          </Container>
        </Container>
      )}

      {device.lessThan('md') && (
        <Container Column CenterCA>
          <Container
            ClassName="hero"
            Height="calc(100 * var(--vh))"
            Width="calc(88 * var(--vw))"
            Column
            Index={0}
            Position={{ Type: 'sticky', Top: '0' }}
            OverflowHideY
          >
            <Container
              Row
              Height="calc(100* var(--vh))"
              Width="100%"
              Position={{ Type: 'relative' }}
              MarginTop="calc(20 * var(--vh))"
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
            </Container>
          </Container>
          <Container
            Column
            BG="white"
            ClassName="content"
            Height="calc(100* var(--vh))"
            Position={{ Type: 'sticky', Top: '0' }}
            Index={2}
            PaddingTop="3rem"
          >
            <Container ClassName="chains" Height="fit-content" Column CenterCA>
              <Container Width="100%">
                <Chain Content={props.HomeContent.HeroSectionChainsJaipur} />
              </Container>
            </Container>
            <Container ClassName="locality" Height="fit-content" Column>
              <Container ClassName="locality__child" BG="transparent" CenterCA>
                <Locality />
              </Container>
            </Container>
          </Container>
          <Container
            MarginTop="calc(10* var(--vh))"
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
