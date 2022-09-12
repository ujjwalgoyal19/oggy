import RestaurantCard from 'app/components/molecules/restaurant-card';
import {
  fetchSearch,
  searchActions,
} from 'app/pages/search-result-page/search.slice';
import { AppDispatch, RootState } from 'app/store';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GalleryProps {}

const StyledGallery = styled.div`
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
`;

export function Gallery(props: GalleryProps) {
  const SearchState = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0',
  });
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0',
  });
  useEffect(() => {
    dispatch(fetchSearch(SearchState));
  }, [
    SearchState.filters,
    SearchState.city,
    SearchState.locality,
    SearchState.type,
    SearchState.page,
  ]);

  const handleGetMoreData = () => {
    if (SearchState.totalPage && SearchState.page < SearchState.totalPage - 1) {
      dispatch(searchActions.nextPage);
    }
  };

  return (
    <StyledGallery>
      {SearchState.list.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          Name={restaurant.name}
          CostForTwo={restaurant.cft}
          Cuisines={restaurant.cuisines}
          Image={restaurant.image}
          DeliveryRating={restaurant.rating.delivery}
          DiningRating={restaurant.rating.dining}
          Link={restaurant.id}
        />
      ))}
    </StyledGallery>
  );
}

export default Gallery;
