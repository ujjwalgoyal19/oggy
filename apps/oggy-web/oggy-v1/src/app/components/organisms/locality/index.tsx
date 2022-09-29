import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import Container from 'app/components/atoms/container';

/* eslint-disable-next-line */
export interface LocalityProps {
  Localities: any;
  Margin: string[];
}

const StyledLocality = styled.div`
  height: fit-content;
  width: 100%;
  color: white;
  background-color: transparent;
`;
const Locality = (props: LocalityProps) => {
  const [overlay, setOverlay] = useState(false);
  const hoverHandler = (value: boolean) => {
    setOverlay(value);
  };

  const dispatch = useDispatch();

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
      >
        {Object.values(props.Localities).map((locality: any, index) => {
          return (
            <LinkHoverImage
              key={index}
              Key={index}
              text={locality.locality_name}
              image="assets/images/malviyaNagar.jpg"
              url="search"
              subtext={locality.res_count + ' places'}
              hoverHandler={hoverHandler}
              hoverState={overlay}
              clickHandler={() => getRestaurantLocalityHandler(locality)}
              margin={props.Margin[index]}
            />
          );
        })}
      </Container>
    </StyledLocality>
  );
};

export default Locality;
