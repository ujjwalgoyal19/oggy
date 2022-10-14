import RestaurantCard from 'app/components/molecules/restaurant-card';
// import { useIntersectionObserver } from 'app/hooks/intersectionObserver.hook';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { throttle } from 'lodash';

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
  const device = useDeviceType();

  const intersectHeight = parseInt(device.getHeight(90).replace(/\D/g, ''));

  const [loadMore, setLoadMore] = useState(true);

  const checkIfIntersecting = () => {
    const pixels =
      (ref.current &&
        0 + ref.current?.clientHeight - window.scrollY - window.innerHeight) ||
      intersectHeight;

    if (pixels < intersectHeight) {
      setLoadMore(true);
    }
  };

  useEffect(() => {
    if (SearchState.loadingStatus === 'loaded' && loadMore) {
      dispatch(fetchSearch(SearchState));
      setLoadMore(false);
    }
  }, [SearchState.loadingStatus, loadMore]);

  useLayoutEffect(() => {
    document.addEventListener('scroll', throttle(checkIfIntersecting, 300));
  }, []);

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
      <StyledGalleryGrid ref={ref}>
        {Object.entries(SearchState.entities).map((resObj, index) => {
          const res = resObj[1];
          return (
            res && (
              <RestaurantCard
                key={index}
                Id={res.id}
                Name={res.name}
                CostForTwo={res.cft}
                Cuisines={res.cuisines}
                Image={getImage(res.image)}
                DeliveryRating={res.rating.delivery}
                DiningRating={res.rating.dining}
              />
            )
          );
        })}
        {SearchState.loadingStatus === 'loading' && <Text>Skeleton Here</Text>}
      </StyledGalleryGrid>
    </StyledGallery>
  );
}

export default Gallery;
