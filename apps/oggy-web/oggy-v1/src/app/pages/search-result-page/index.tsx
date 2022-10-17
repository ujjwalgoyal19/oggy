import styled from 'styled-components';

import SearchResultTemplate from 'app/components/templates/search-result-template';
import { useDispatch } from 'react-redux';
import { fetchFilters } from 'app/store/filter/index.slice';
import { AppDispatch } from 'app/store';
import { useEffect, useLayoutEffect } from 'react';

/* eslint-disable-next-line */
export interface SearchResultPageProps {}

const StyledSearchResultPage = styled.div``;

export function SearchResultPage(props: SearchResultPageProps) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledSearchResultPage>
      <SearchResultTemplate />
    </StyledSearchResultPage>
  );
}

export default SearchResultPage;
