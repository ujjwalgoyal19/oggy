import styled from 'styled-components';

import SearchResultTemplate from 'app/components/templates/search-result-template';
import { useEffect } from 'react';
import { CuisinesAPI } from 'app/service/cuisines.service';

/* eslint-disable-next-line */
export interface SearchResultPageProps {}

const StyledSearchResultPage = styled.div``;

export function SearchResultPage(props: SearchResultPageProps) {
  const Filters = new Array<{
    Name: string;
    List: {
      command: string;
      text: string;
    }[];
    Type: string;
  }>();
  let activeFilters = new Array<object>();
  const applyFilterHandler = (filters: Map<string, object>) => {
    activeFilters = new Array<object>();
    filters.forEach((filters, category) => {
      activeFilters.push({
        type: category,
        filters: filters,
      });
    });
  };
  useEffect(() => {
    console.log(Filters);
    if (Filters.length === 0) {
      Filters.push({
        Name: 'Sort',
        Type: 'radio',
        List: [
          {
            command: 'alphabetic',
            text: 'Alphabetic',
          },
          {
            command: 'zomato_delivery_rating',
            text: 'Rating: Zomato Delivery',
          },
          {
            command: 'zomato_dining_rating',
            text: 'Rating: Zomato Dining',
          },
          {
            command: 'swiggy_rating',
            text: 'Rating: Swiggy',
          },
          {
            command: 'dineout_rating',
            text: 'Rating: Dineout',
          },
          {
            command: 'eazydiner_rating',
            text: 'Rating: Eazydiner',
          },
        ],
      });
      CuisinesAPI.getAll().then((response) => {
        const Data = Array.from(response.data.cuisines, (cuisine: any) => {
          return { command: cuisine.cuisine_id, text: cuisine.cuisine_name };
        });
        Filters.push({
          Name: 'Cuisines',
          Type: 'search',
          List: Data,
        });
      });
      Filters.push({
        Name: 'More filters',
        Type: 'multi',
        List: [
          {
            command: 'isVeg=true',
            text: 'Vegetarian Restaurant',
          },
          {
            command: 'isDining=true',
            text: 'Dining',
          },
          {
            command: 'isDeliver=true',
            text: 'Delivery',
          },
          {
            command: 'isNightlife=true',
            text: 'Nightlife',
          },
        ],
      });
    }
  }, []);
  const Data = ['Hello'];
  return (
    <StyledSearchResultPage>
      <SearchResultTemplate
        Heading="Madhur"
        Filters={Filters}
        ActiveFilters={activeFilters}
        ApplyFilterHandler={applyFilterHandler}
        Data={Data}
      />
    </StyledSearchResultPage>
  );
}

export default SearchResultPage;
