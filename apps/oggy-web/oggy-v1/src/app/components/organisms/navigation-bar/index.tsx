import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavigationBarProps {}

const StyledNavigationBar = styled.div`
  color: pink;
`;

export function NavigationBar(props: NavigationBarProps) {
  return (
    <StyledNavigationBar>
      <h1>Welcome to NavigationBar!</h1>
    </StyledNavigationBar>
  );
}

export default NavigationBar;
