import Container from 'app/components/atoms/container';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LoginRegistrationPageTemplateProps {}

const StyledLoginRegistrationPageTemplate = styled.div`
  color: pink;
`;

export function LoginRegistrationPageTemplate(
  props: LoginRegistrationPageTemplateProps
) {
  return (
    <StyledLoginRegistrationPageTemplate>
      <Container CenterMA>
        <Container Width="70%">
          <Container Column CenterCA>
            Hell
          </Container>
          <Container Column CenterCA>
            Welcome
          </Container>
        </Container>
      </Container>
    </StyledLoginRegistrationPageTemplate>
  );
}

export default LoginRegistrationPageTemplate;
