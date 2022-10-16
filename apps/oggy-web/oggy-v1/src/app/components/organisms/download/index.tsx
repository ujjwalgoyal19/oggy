import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import Images from 'app/constants/images';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.section`
  height: 100%;
  background-color: black;
  color: white;
`;

export function Download(props: DownloadProps) {
  const device = useDeviceType();
  return (
    <StyledDownload>
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
          <Container Width={device.greaterThan('md') && '40%'}>
            <Text H3 N Color="LightGrey" style={{ textAlign: 'center' }}>
              Find the experience of your best restaurant in cheapest prices,
              never let your wallet stop you from best food in your city.
            </Text>
          </Container>
        </Container>
        <Container Row Width="fit-content" Height="fit-content">
          <a href="https://rb.gy/bqprcb">
            <Container Height="max(2.5vw, 3.5vh)">
              <Image Src={Images.HomePage.AndroidStoreBadge} />
            </Container>
          </a>
        </Container>
      </Container>
    </StyledDownload>
  );
}

export default Download;
