import RestaurantCard from 'app/components/molecules/restaurant-card';
// import { useIntersectionObserver } from 'app/hooks/intersectionObserver.hook';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

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
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!isIntersecting) {
      ScrollTrigger.getById('load')?.kill();
      ScrollTrigger.create({
        id: 'load',
        trigger: ref.current,
        start: '75% 50%',
        end: '75% 50%',
        onEnter: () => {
          setIsIntersecting(true);
        },
      });
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      dispatch(fetchSearch(SearchState));
    }
  }, [isIntersecting]);

  useEffect(() => {
    if (SearchState.loadingStatus === 'loaded') {
      setIsIntersecting(false);
    }
  }, [SearchState.loadingStatus]);

  useEffect(() => {
    dispatch(fetchSearch(SearchState));
  }, [SearchState.filters, SearchState.searchQuery, SearchState.location]);

  const Desktop = useDeviceType().greaterThan('md');
  return (
    <StyledGallery>
      <Container Row MarginBottom="3rem">
        <Text H2={!Desktop} D6={Desktop} B>
          {SearchState.location.type === 'City'
            ? `Restaurants in ${SearchState.city}`
            : `${SearchState.locality} Restaurants, ${SearchState.city}`}
        </Text>
      </Container>
      <Container ClassName="gallery-grid" Ref={ref}>
        <StyledGalleryGrid>
          {SearchState.entities &&
            Object.entries(SearchState.entities).map((res, index) => {
              if (res[1]) {
                const resObj = res[1];
                return (
                  <RestaurantCard
                    key={index}
                    Id={resObj.id}
                    Name={resObj.name}
                    CostForTwo={resObj.cft}
                    Cuisines={resObj.cuisines}
                    Image={getImage(resObj.image)}
                    DeliveryRating={resObj.rating.delivery}
                    DiningRating={resObj.rating.dining}
                  />
                );
              } else {
                return null;
              }
            })}
        </StyledGalleryGrid>
      </Container>
    </StyledGallery>
  );
}

export default Gallery;
