import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SearchResultPageProps {}

const StyledSearchResultPage = styled.div`
  color: pink;
`;

export function SearchResultPage(props: SearchResultPageProps) {
  return (
    <StyledSearchResultPage>
      <h1>Welcome to SearchResultPage!</h1>
    </StyledSearchResultPage>
  );
}

export default SearchResultPage;
