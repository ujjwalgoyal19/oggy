import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Page404Props {}

const StyledPage404 = styled.div`
  color: pink;
`;

export function Page404(props: Page404Props) {
  return (
    <StyledPage404>
      <h1>Welcome to Page404!</h1>
    </StyledPage404>
  );
}

export default Page404;
