import LoginRegistrationPageTemplate from 'app/components/templates/login-registration-page-template';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LoginRegistrationPageProps {}

const StyledLoginRegistrationPage = styled.div`
  color: pink;
`;

export function LoginRegistrationPage(props: LoginRegistrationPageProps) {
  return (
    <StyledLoginRegistrationPage>
      <LoginRegistrationPageTemplate />
    </StyledLoginRegistrationPage>
  );
}

export default LoginRegistrationPage;
