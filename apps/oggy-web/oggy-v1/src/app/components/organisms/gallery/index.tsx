import RestaurantCard from 'app/components/molecules/restaurant-card';
import { fetchSearch } from 'app/store/search/index.slice';
import { AppDispatch, RootState } from 'app/store';
import { useCallback, useEffect, useRef, useState } from 'react';
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
  ${media.lessThan('md')`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 245, 245, 1) 6vh 
  );
  `}
`;

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
      width: 31%;
      margin-bottom: 3rem;
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

  const intersectHeight = parseFloat(
    device.getHeight(90).match(/-?(?:\d+(?:\.\d*)?|\.\d+)/)[0]
  );

  const [resultsComplete, setResultsComplete] = useState(false);

  const checkIfIntersecting = () => {
    const pixels =
      (ref.current &&
        0 + ref.current?.clientHeight - window.scrollY - window.innerHeight) ||
      intersectHeight;

    if (pixels < intersectHeight) {
      dispatch(fetchSearch());
    }
  };

  const throttledCheckIfIntersecting = useCallback(
    throttle(checkIfIntersecting, 500),
    []
  );

  useEffect(() => {
    if (SearchState.page === SearchState.totalPage) {
      setResultsComplete(true);
    } else if (SearchState.page < (SearchState.totalPage || 1)) {
      setResultsComplete(false);
    }
  }, [SearchState.page, SearchState.totalPage]);

  useEffect(() => {
    console.log('change');
    !resultsComplete &&
      document.addEventListener('scroll', throttledCheckIfIntersecting);
    resultsComplete &&
      document.removeEventListener('scroll', throttledCheckIfIntersecting);

    return () =>
      document.removeEventListener('scroll', throttledCheckIfIntersecting);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resultsComplete]);

  useEffect(() => {
    dispatch(fetchSearch());
  }, [SearchState.filters, SearchState.searchQuery, SearchState.location]);

  return (
    <StyledGallery>
      <Container CenterMA Width="calc(100 * var(--vw))">
        <Container Width="var(--search-page-width)" Column>
          {device.greaterThan('md') && (
            <Container Row MarginBottom="1rem">
              <Text H1 B>
                {SearchState.location.type === 'City'
                  ? `Restaurants in ${SearchState.city}`
                  : `${SearchState.locality} Restaurants, ${SearchState.city}`}
              </Text>
            </Container>
          )}
          {device.lessThan('md') && (
            <Container Row MarginBottom="3rem">
              <Text H1 Sub B>
                {SearchState.location.type === 'City'
                  ? `Restaurants in ${SearchState.city}`
                  : `${SearchState.locality} Restaurants, ${SearchState.city}`}
              </Text>
            </Container>
          )}
          <StyledGalleryGrid ref={ref}>
            {Object.entries(SearchState.entities).map((resObj, index) => {
              const res = resObj[1];
              console.log(res);
              return (
                res && (
                  <RestaurantCard
                    key={index}
                    Vendors={res.vendors}
                    Id={res.id}
                    Name={res.name}
                    CostForTwo={res.cft}
                    Cuisines={res.cuisines}
                    Image={getImage(res.image)}
                    DeliveryRating={res.rating.delivery}
                    DiningRating={res.rating.dining}
                    Locality={res.locality}
                  />
                )
              );
            })}
            {SearchState.loadingStatus === 'loading' &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                return <RestaurantCard Skeleton key={i} />;
              })}
          </StyledGalleryGrid>
          {resultsComplete && (
            <Container CenterMA PaddingTop="8vh">
              <Text D6 EB Color="Grey">
                End of results!
              </Text>
            </Container>
          )}
        </Container>
      </Container>
    </StyledGallery>
  );
}

export default Gallery;
