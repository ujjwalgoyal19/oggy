import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import config from 'app/config';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.section`
  height: 100vh;
  background-color: black;
  color: white;
`;

export function Download(props: DownloadProps) {
  return (
    <StyledDownload>
      {/* <Container>
        <Image Image={config.images.Home.Mockup.First} />
      </Container> */}
      <Container Column Width="100vw" CenterCA PaddingTop="9%">
        <Container
          Width="fit-content"
          Height="fit-content"
          PaddingBottom="2.5%"
        >
          <Text D2 EB>
            Download our app
          </Text>
        </Container>
        <Container Row Width="40%" Height="fit-content" PaddingBottom="5%">
          <Text H2 N Color="LightGrey" style={{ textAlign: 'center' }}>
            Find the experience of your best restaurant in cheapest prices,
            never let your wallet stop you from best food in your city.
          </Text>
        </Container>

        <Container Row Width="fit-content">
          {/* <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Apple} />
          </a> */}

          <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Android} />
          </a>
        </Container>
      </Container>
    </StyledDownload>
  );
}

export default Download;
