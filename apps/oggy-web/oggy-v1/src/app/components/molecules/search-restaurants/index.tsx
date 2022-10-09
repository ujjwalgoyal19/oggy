import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchRestaurantsProps {}

const StyledSearchRestaurants = styled.div`
  color: pink;
`;

export function SearchRestaurants(props: SearchRestaurantsProps) {
  return (
    <StyledSearchRestaurants>
      <h1>Welcome to SearchRestaurants!</h1>
    </StyledSearchRestaurants>
  );
}

export default SearchRestaurants;
