import RestaurantCard from 'app/components/molecules/restaurant-card';
import { useIntersectionObserver } from 'app/hooks/intersectionObserver.hook';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface GalleryProps {}

const StyledGallery = styled.div`
  width: 90%;
  ${media.greaterThan('md')`
    width: 70%;
  `}
`;

const StyledGalleryGrid = styled.div`
  ${media.lessThan('md')`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  `}
  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  `}
  ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 33%);
    gap: 2.5rem;
  `}
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

  const Desktop = useDeviceType().greaterThan('md');

  useEffect(() => {
    if (isIntersecting) {
      dispatch(fetchSearch(SearchState));
    }
  }, [isIntersecting]);

  useEffect(() => {
    dispatch(fetchSearch(SearchState));
  }, [SearchState.filters, SearchState.searchQuery, SearchState.location]);

  return (
    <StyledGallery>
      <Container Row MarginBottom="3rem">
        <Text H2={!Desktop} D6={Desktop} B>
          {SearchState.location.type === 'City'
            ? `Restaurants in ${SearchState.city}`
            : `${SearchState.locality} Restaurants, ${SearchState.city}`}
        </Text>
      </Container>
      <StyledGalleryGrid>
        {SearchState.ids.map((id, index) => {
          return (
            <RestaurantCard
              key={SearchState.entities[id]!.id}
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
      </StyledGalleryGrid>
      <div ref={ref} />
    </StyledGallery>
  );
}

export default Gallery;
