import Container from 'app/components/atoms/container';
// import GoogleAd from 'app/components/atoms/google-ad';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import Images from 'app/constants/images';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.section`
  background-color: black;
  color: white;

  ${media.greaterThan('md')`
    --download-width: 80%;
  `}
  ${media.greaterThan('lg')`
    --download-width: 60%;
  `}
`;

export function Download(props: DownloadProps) {
  const device = useDeviceType();
  return (
    <StyledDownload>
      <Container Column CenterCA SpaceBetweenMA Height="100%">
        <Container
          Column
          Width="100vw"
          CenterCA
          PaddingTop="9vh"
          PaddingBottom="9vh"
          SpaceBetweenMA={device.lessThan('md')}
        >
          <Container
            Column
            CenterCA
            Width={device.greaterThan('md') ? 'fit-content' : '90%'}
            Height="fit-content"
            Gap="3rem"
            MarginBottom="5rem"
          >
            {device.greaterThan('md') ? (
              <Text D3 EB>
                Download our app
              </Text>
            ) : (
              <Text D6 EB>
                Download our app
              </Text>
            )}
            <Container Width={device.greaterThan('md') && '60%'}>
              <Text H3 N Color="LightGrey" style={{ textAlign: 'center' }}>
                Find the experience of your best restaurant in cheapest prices,
                never let your wallet stop you.
              </Text>
            </Container>
          </Container>
          <Container Row Width="fit-content" Height="fit-content">
            <a href="https://rb.gy/bqprcb">
              <Container Height="max(2.5vw, 4.5vh)">
                <Image Src={Images.HomePage.AndroidStoreBadge} />
              </Container>
            </a>
          </Container>
        </Container>
        {device.greaterThan('md') && (
          <Container
            Column
            Width="var(--download-width)"
            Height="fit-content"
            PaddingBottom="10rem"
          >
            <Container Row SpaceBetweenMA>
              <Container Column Width="fit-content" CenterCA>
                <Container PaddingBottom="2rem" Width="fit-content">
                  <Text H1 Color="Primary" EB>
                    About Oggy
                  </Text>
                </Container>

                <Container PaddingBottom=".6rem" Width="fit-content">
                  <Link to="/about">
                    <Text H3 N>
                      Who We Are
                    </Text>
                  </Link>
                </Container>

                <Container PaddingBottom=".6rem" Width="fit-content">
                  <Link to="/contactUs">
                    <Text H3 N>
                      Contact Us
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container Column Width="fit-content" CenterCA>
                <Container
                  PaddingBottom="2rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Text H1 Color="Primary" EB>
                    Learn More
                  </Text>
                </Container>
                <Container
                  PaddingBottom=".6rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Link to="/privacyPolicy">
                    <Text H3 N>
                      Privacy
                    </Text>
                  </Link>
                </Container>
                <Container
                  PaddingBottom=".6rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Link to="/termsAndConditions">
                    <Text H3 N>
                      Terms
                    </Text>
                  </Link>
                </Container>
              </Container>
              <Container Column Width="fit-content" CenterCA>
                <Container
                  PaddingBottom="2rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Text H1 Color="Primary" EB>
                    Socials
                  </Text>
                </Container>
                <Container
                  PaddingBottom=".6rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Text H3 N>
                    <a href="https://www.instagram.com/oggy_india/?hl=en">
                      Instagram
                    </a>
                  </Text>
                </Container>
                <Container
                  PaddingBottom=".6rem"
                  Width="fit-content"
                  Height="fit-content"
                >
                  <Text H3 N>
                    <a href="https://www.facebook.com/team0ggy">Facebook</a>
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>
        )}
        {device.lessThan('md') && (
          <Container
            Width="fit-content"
            Height="fit-content"
            Gap="3rem"
            PaddingBottom="8rem"
          >
            <a
              href="https://www.instagram.com/oggy_india/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size="3.5rem" color="#ff9800" />
            </a>
            <a
              href="https://www.facebook.com/team0ggy"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook size="3.5rem" color="#ff9800" />
            </a>
          </Container>
        )}
      </Container>
    </StyledDownload>
  );
}

export default Download;
