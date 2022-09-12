import styled from 'styled-components';

import SearchResultTemplate from 'app/components/templates/search-result-template';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters, filtersReducer } from './filters.slice';
import { AppDispatch, RootState } from 'app/store';
import { useEffect } from 'react';
import { fetchSearch } from './search.slice';

/* eslint-disable-next-line */
export interface SearchResultPageProps {}

const StyledSearchResultPage = styled.div``;

export function SearchResultPage(props: SearchResultPageProps) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  return (
    <StyledSearchResultPage>
      <SearchResultTemplate Heading="Madhur" />
    </StyledSearchResultPage>
  );
}

export default SearchResultPage;
