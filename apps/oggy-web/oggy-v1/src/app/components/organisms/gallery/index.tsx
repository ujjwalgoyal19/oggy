import RestaurantCard from 'app/components/molecules/restaurant-card';
import { useIntersectionObserver } from 'app/hooks/intersectionObserver.hook';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface GalleryProps {}

const StyledGallery = styled.div`
  z-index: 100;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  gap: 2.5rem;
`;

const getImage = (image: string | undefined) => {
  if (image) {
    if (image.includes('https')) {
      return image;
    } else {
      return `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_302,c_fill/${image}`;
    }
  } else {
    return image;
  }
};

export function Gallery(props: GalleryProps) {
  const SearchState = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef(null);
  const { isIntersecting } = useIntersectionObserver(
    ref,
    { rootMargin: '8000px 0px 0px 0px' },
    false
  );

  useEffect(() => {
    console.log(isIntersecting);
    if (isIntersecting) {
      dispatch(fetchSearch(SearchState));
    }
  }, [isIntersecting]);

  useEffect(() => {
    dispatch(fetchSearch(SearchState));
  }, [SearchState.filters]);

  return (
    <>
      <Container Row MarginBottom="3rem">
        <Text H1 N>
          {SearchState.location.type === 'City'
            ? `Restaurants in ${SearchState.city}`
            : `${SearchState.locality} Restaurants, ${SearchState.city}`}
        </Text>
      </Container>
      <StyledGallery>
        {SearchState.ids.map((id, index) => {
          return (
            <RestaurantCard
              key={index}
              Id={SearchState.entities[id]!.id}
              Name={SearchState.entities[id]!.name}
              CostForTwo={SearchState.entities[id]!.cft}
              Cuisines={SearchState.entities[id]!.cuisines}
              Image={getImage(SearchState.entities[id]!.image)}
              DeliveryRating={SearchState.entities[id]!.rating.delivery}
              DiningRating={SearchState.entities[id]!.rating.dining}
            />
          );
        })}
      </StyledGallery>
      <div ref={ref}>Madhur</div>
    </>
  );
}

export default Gallery;
