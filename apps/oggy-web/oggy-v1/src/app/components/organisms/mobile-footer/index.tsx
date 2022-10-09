import Container from 'app/components/atoms/container';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MobileFooterProps {}

const StyledMobileFooter = styled.div`
  color: pink;
`;

export function MobileFooter(props: MobileFooterProps) {
  return (
    <StyledMobileFooter>
      <Container Column></Container>
    </StyledMobileFooter>
  );
}

export default MobileFooter;
