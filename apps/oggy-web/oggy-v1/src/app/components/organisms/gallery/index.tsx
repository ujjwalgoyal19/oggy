import RestaurantCard from 'app/components/molecules/restaurant-card';
// import { useIntersectionObserver } from 'app/hooks/intersectionObserver.hook';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
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

const StyledGallery = styled.div``;

const StyledGalleryGrid = styled.div`
  display: flex;
  ${media.lessThan('md')`
    flex-direction: column;
    gap: 2.5rem;
  `}
  ${media.greaterThan('md')`
    flex-wrap: wrap;
    > div {
      width: 48%;
    }
  `}
  ${media.greaterThan('lg')`
    flex-wrap: wrap;
    gap: 1.5%;
    > div {
      width: 32%;
    }
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

  // const intersectHeight = parseFloat(device.getHeight(90).replace(/\D/g, ''));
  const intersectHeight = parseFloat(
    device.getHeight(90).match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]
  );

  const [loadMore, setLoadMore] = useState(true);
  const [resultsComplete, setResultsComplete] = useState(false);

  const checkIfIntersecting = () => {
    if (!resultsComplete) {
      const pixels =
        (ref.current &&
          0 +
            ref.current?.clientHeight -
            window.scrollY -
            window.innerHeight) ||
        intersectHeight;

      if (pixels < intersectHeight) {
        setLoadMore(true);
      }
    }
  };

  useEffect(() => {
    // console.log(SearchState.totalPage);
    // console.log(SearchState.ids.length);
    if (SearchState.ids.length + 1 === SearchState.totalPage) {
      setResultsComplete(true);
    } else if (SearchState.loadingStatus === 'loaded' && loadMore) {
      dispatch(fetchSearch(SearchState));
      setLoadMore(false);
      setResultsComplete(false);
    }
  }, [SearchState.loadingStatus, loadMore]);

  useLayoutEffect(() => {
    document.addEventListener('scroll', throttle(checkIfIntersecting, 500));
  }, []);

  useEffect(() => {
    dispatch(fetchSearch(SearchState));
    setResultsComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [SearchState.filters, SearchState.searchQuery, SearchState.location]);

  const Desktop = useDeviceType().greaterThan('md');
  return (
    <StyledGallery>
      <Container CenterMA Width="calc(100 * var(--vw))">
        <Container
          Width={
            (device.greaterThan('xl') && 'calc(70 * var(--vw) )') ||
            (device.greaterThan('md') && 'calc(90 * var(--vw) )') ||
            (device.lessThan('md') && '90%')
          }
          Column
        >
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
            {SearchState.loadingStatus === 'loading' &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                return <RestaurantCard Skeleton key={i} />;
              })}
          </StyledGalleryGrid>
          <Container CenterMA PaddingTop="8vh">
            {resultsComplete && (
              <Text D6 EB Color="Grey">
                End of results!
              </Text>
            )}
          </Container>
        </Container>
      </Container>
    </StyledGallery>
  );
}

export default Gallery;
