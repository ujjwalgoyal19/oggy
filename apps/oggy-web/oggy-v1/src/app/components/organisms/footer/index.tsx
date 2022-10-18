import styled from 'styled-components';
import config from 'app/config';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import GoogleAd from 'app/components/atoms/google-ad';
import { Link, useLocation } from 'react-router-dom';
import Separator from 'app/components/atoms/separator';
import Container from 'app/components/atoms/container';
import Images from 'app/constants/images';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  min-height: 20vh;
  padding: 5vh 0vw 1vh 0vw;
  background-color: #f8f8f8;
`;

export function Footer(props: FooterProps) {
  const location = useLocation();
  if (location.pathname === '/') return <div></div>;
  return (
    <StyledFooter>
      <Container Column CenterCA PaddingBottom="2rem">
        <Container Column Width="70%" Gap="4rem">
          <Container Row SpaceBetweenMA>
            <Link to="/">
              <Container Width="fit-content" Height="3vw">
                <Image Src={Images.Logo.Oggy} />
              </Container>
            </Link>
            <a href="https://rb.gy/bqprcb">
              <Container Height="3vw">
                <Image Src={Images.HomePage.AndroidStoreBadge} />
              </Container>
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
                <Link to="/about">Who We Are</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/workWithUs">Work With Us</Link>
                <Link to="/contactUs">Contact Us</Link>
              </Container>
            </Container>
            <Container Column Width="fit-content" Gap="2rem">
              <Container Column>
                <Text H3 N>
                  LEARN MORE
                </Text>
              </Container>
              <Container Column Gap="1rem">
                <Link to="/privacyPolicy">Privacy</Link>
                <Link to="/termsAndConditions">Terms</Link>
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
              Privacy Policy and Content Policies. All trademarks are properties
              of their respective owners. 2021-2022 © Oggy™ Ltd. All rights
              reserved.
            </Text>
          </Container>
          {/* <Container
            Row
            SpaceBetweenMA
            Border={{ Style: 'Solid', Color: '#F8F8F8' }}
          >
            <GoogleAd></GoogleAd>
          </Container> */}
        </Container>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
