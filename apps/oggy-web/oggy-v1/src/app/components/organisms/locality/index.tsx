import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import Container from 'app/components/atoms/container';
import { LocalityAPI } from 'app/service/locality.service';

/* eslint-disable-next-line */
export interface LocalityProps {}

const StyledLocality = styled.div`
  height: fit-content;
  width: 100%;
  color: white;
  background-color: transparent;
`;

const getRandomMargin = (length: number) => {
  const Margin = [];
  for (let i = 0; i < length; i++) {
    if (i % 2 !== 0) {
      Margin.push(Math.random() * 10 + '%');
    } else {
      Margin.push(Math.random() * 5 + '%');
    }
  }
  return Margin;
};

const Locality = (props: LocalityProps) => {
  const [overlay, setOverlay] = useState(false);
  const [localities, setLocalities] = useState<any>({});
  const [margin, setMargin] = useState<any[]>([]);
  const hoverHandler = (value: boolean) => {
    setOverlay(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    LocalityAPI.getAll(1).then((locObject) => {
      setLocalities(locObject.localities);
      setMargin(getRandomMargin(locObject.totalLocalities));
    });
  }, []);

  const getRestaurantLocalityHandler = (locality: any) => {
    dispatch(
      searchActions.changeLocation({
        type: 'Locality',
        id: locality.locality_id,
        name: locality.locality_name,
      })
    );
  };

  return (
    <StyledLocality>
      <Container
        ClassName="locality_list"
        Row
        BG="transparent"
        Gap="2rem"
        Wrap
        SpaceBetweenMA
        Height="fit-content"
        MaxHeight="80vh"
      >
        {localities &&
          Object.keys(localities).length > 0 &&
          Object.values(localities).map((locality: any, index) => {
            return (
              <LinkHoverImage
                key={`loc-${index}`}
                text={locality.locality_name}
                image="assets/images/malviyaNagar.jpg"
                url="search"
                subtext={locality.res_count + ' places'}
                hoverHandler={hoverHandler}
                hoverState={overlay}
                clickHandler={() => getRestaurantLocalityHandler(locality)}
                margin={margin[index]}
              />
            );
          })}
      </Container>
    </StyledLocality>
  );
};

export default Locality;
