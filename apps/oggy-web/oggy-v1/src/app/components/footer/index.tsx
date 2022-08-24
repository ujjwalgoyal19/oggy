import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  color: pink;
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <h1>Welcome to Footer!</h1>
    </StyledFooter>
  );
}

export default Footer;
