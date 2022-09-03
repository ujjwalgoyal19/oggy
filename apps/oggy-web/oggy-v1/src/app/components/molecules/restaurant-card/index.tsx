import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantCardProps {}

const StyledRestaurantCard = styled.div`
  color: pink;
`;

export function RestaurantCard(props: RestaurantCardProps) {
  return (
    <StyledRestaurantCard>
      <h1>Welcome to RestaurantCard!</h1>
    </StyledRestaurantCard>
  );
}

export default RestaurantCard;
