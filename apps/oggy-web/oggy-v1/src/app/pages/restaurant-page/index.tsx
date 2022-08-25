import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantPageProps {}

const StyledRestaurantPage = styled.div`
  color: pink;
`;

export function RestaurantPage(props: RestaurantPageProps) {
  return (
    <StyledRestaurantPage>
      <h1>Welcome to RestaurantPage!</h1>
    </StyledRestaurantPage>
  );
}

export default RestaurantPage;
