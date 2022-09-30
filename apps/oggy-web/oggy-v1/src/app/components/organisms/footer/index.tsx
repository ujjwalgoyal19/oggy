import styled from 'styled-components';
import config from 'app/config';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import { Link } from 'react-router-dom';
import Separator from 'app/components/atoms/separator';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  min-height: 20vh;
  padding: 5vh 0vw 1vh 0vw;
  background-color: #f8f8f8;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Container Column CenterCA PaddingBottom="2rem">
        <Container Column Width="70%" Gap="4rem">
          <Container Row SpaceBetweenMA>
            <Image Image={config.images.Oggy.Logo} />
            <a href="https://rb.gy/bqprcb">
              <Image Image={config.images.Home.Badge.Android} />
            </a>
          </Container>
          <Container Row SpaceBetweenMA>
            <Container Column Width="fit-content" Gap="2rem">
              <Container Column>
                <Text H3 N>
                  ABOUT OGGY
                </Text>
              </Container>
              <Container Column Gap="1rem">
                <a href="https://github.com/">Who We Are</a>
                <a href="https://github.com/">Blog</a>
                <a href="https://github.com/">Work With Us</a>
                <a href="https://github.com/">Contact Us</a>
              </Container>
            </Container>
            <Container Column Width="fit-content" Gap="2rem">
              <Container Column>
                <Text H3 N>
                  LEARN MORE
                </Text>
              </Container>
              <Container Column Gap="1rem">
                <a href="https://github.com/">Privacy</a>
                <a href="https://github.com/">Security</a>
                <a href="https://github.com/">Terms</a>
              </Container>
            </Container>
            <Container Column Width="fit-content" Gap="2rem">
              <Container Column>
                <Text H3 N>
                  SOCIALS
                </Text>
              </Container>
              <Container Column Gap="1rem">
                <a href="https://www.instagram.com/oggy_india/?hl=en">
                  Instagram
                </a>
                <a href="https://www.facebook.com/team0ggy">Facebook</a>
                <a href="https://www.linkedin.com/in/samarth-gupta-5645911aa/">
                  Linkedin
                </a>
              </Container>
            </Container>
          </Container>
          <Container Column Gap="1.5rem">
            <Separator Color="#F8F8F8" ColorType="light" Horizontal />
            <Text style={{ textAlign: 'center' }}>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2021-2022 © Oggy™ Ltd.
              All rights reserved.
            </Text>
          </Container>
        </Container>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
