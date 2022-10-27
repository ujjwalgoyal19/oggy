import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Images from 'app/constants/images';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MobileFooterProps {}

const StyledMobileFooter = styled.div``;

export function MobileFooter(props: MobileFooterProps) {
  const location = useLocation();
  return (
    <StyledMobileFooter>
      {location.pathname !== '/' && (
        <Container
          BG="#f8f8f8"
          Column
          Gap="2rem"
          PaddingTop="2rem"
          PaddingBottom="5rem"
          CenterCA
        >
          <Container Width="fit-content">
            <Image Height="7rem" Src={Images.Logo.Oggy} />
          </Container>
          <Container Width="fit-content" Gap="3rem">
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
        </Container>
      )}
    </StyledMobileFooter>
  );
}

export default MobileFooter;
