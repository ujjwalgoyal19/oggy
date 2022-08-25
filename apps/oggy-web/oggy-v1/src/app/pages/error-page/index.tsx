import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ErrorPageProps {}

const StyledErrorPage = styled.div`
  color: pink;
`;

export function ErrorPage(props: ErrorPageProps) {
  return (
    <StyledErrorPage>
      <h1>Welcome to ErrorPage!</h1>
    </StyledErrorPage>
  );
}

export default ErrorPage;
