import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchBarHeroProps {}

const StyledSearchBarHero = styled.div`
  color: pink;
`;

export function SearchBarHero(props: SearchBarHeroProps) {
  return <StyledSearchBarHero></StyledSearchBarHero>;
}

export default SearchBarHero;
