import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import config from 'app/config';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.section`
  height: 100vh;
  display: flex;
  background-color: black;
  flex-direction: row;
  color: white;
`;

const CTAWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2vw;
`;

export function Download(props: DownloadProps) {
  return (
    <StyledDownload>
      <Container>
        <Image Image={config.images.Home.Mockup.First} />
      </Container>
      <Container>
        <Text H1>Download our app</Text>
        <Text H2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem`
        </Text>
        <CTAWrapper>
          <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Apple} />
          </a>

          <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Android} />
          </a>
        </CTAWrapper>
      </Container>
    </StyledDownload>
  );
}

export default Download;
