import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeadingProps {}

const StyledHeading = styled.div`
  color: pink;
`;

export function Heading(props: HeadingProps) {
  return (
    <StyledHeading>
      <h1>Welcome to Heading!</h1>
    </StyledHeading>
  );
}

export default Heading;
