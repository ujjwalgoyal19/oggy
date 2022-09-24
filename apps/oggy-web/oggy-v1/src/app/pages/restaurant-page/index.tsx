import RestaurantPageTemplate from 'app/components/templates/restaurant-page-template';
import { AppDispatch, RootState } from 'app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { fetchRestaurant } from 'app/store/restaurant/index.slice';

/* eslint-disable-next-line */
export interface RestaurantPageProps {}

const StyledRestaurantPage = styled.div``;

export function RestaurantPage(props: RestaurantPageProps) {
  const { restaurantId } = useParams();
  const restaurantState = useSelector((state: RootState) => state.restaurant);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (restaurantId) dispatch(fetchRestaurant(parseInt(restaurantId)));
  }, [restaurantId]);
  return (
    <StyledRestaurantPage>
      {restaurantState.loadingStatus === 'loaded' && (
        <RestaurantPageTemplate
          Data={restaurantState?.entities[restaurantState.ids[0]]}
        />
      )}
    </StyledRestaurantPage>
  );
}

export default RestaurantPage;
