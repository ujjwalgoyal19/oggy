import Heading from 'app/components/atoms/heading';
import Image from 'app/components/atoms/image';
import config from 'app/config';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DownloadProps {}

const StyledDownload = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Children = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Left = styled(Children)``;
const Right = styled(Children)`
  box-sizing: border-box;
  align-items: flex-start;
  padding-right: 15vw;
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
      <Left>
        <Image Image={config.images.Home.Mockup.First} />
      </Left>
      <Right>
        <Heading
          Heading={config.components.heading.primary}
          HeadingColor="black"
          HeadingSize="3vw"
          MarginBottom="6vh"
        >
          Download our app
        </Heading>
        <Heading
          Heading={config.components.heading.secondary}
          HeadingColor="black"
          MarginBottom="6vh"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem`
        </Heading>
        <CTAWrapper>
          <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Apple} />
          </a>

          <a href="https://github.com/">
            <Image Image={config.images.Home.Badge.Android} />
          </a>
        </CTAWrapper>
      </Right>
    </StyledDownload>
  );
}

export default Download;
