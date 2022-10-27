import Button from 'app/components/atoms/button';
import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface Page404Props {}

const StyledPage404 = styled.div`
  color: pink;
`;

export function Page404(props: Page404Props) {
  const navigate = useNavigate();
  return (
    <StyledPage404>
      <Container Width="100%" CenterMA>
        <Container
          Row
          Height="calc(80 * var(--vh))"
          Width="var(--restaurant-page-width)"
          CenterMA
          CenterCA
        >
          <Container Column Width="50%" Gap="7rem" Height="fit-content">
            <Container Height="fit-content">
              <Text D4 EB Color="Grey">
                Food not found
              </Text>
            </Container>
            <Container Column Height="fit-content">
              <Text H3 N Color="Grey">
                The page you are looking is not available.
              </Text>
              <Text H3 N Color="Grey">
                Try your search again or use the Go to Home button.
              </Text>
            </Container>
            <Container Height="fit-content">
              <Button
                Primary
                ClickHandler={() => {
                  navigate('/');
                }}
              >
                Go to Home
              </Button>
            </Container>
          </Container>
          <Container Column Width="50%"></Container>
        </Container>
      </Container>
    </StyledPage404>
  );
}

export default Page404;
