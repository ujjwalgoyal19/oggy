import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantSuggestionsProps {
  Data: any[];
}

const StyledRestaurantSuggestions = styled.div`
  padding: 1rem 0;
`;

const RestaurantImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  border-radius: 5px;
  filter: unset;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
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

export function RestaurantSuggestions(props: RestaurantSuggestionsProps) {
  // console.log(props.Data);
  return (
    <StyledRestaurantSuggestions>
      <Container Column Width="100%">
        {props.Data.map((res) => {
          return (
            <Link
              key={res.id}
              to={`/restaurant/${res.id}`}
              style={{
                display: 'block',
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
              }}
            >
              <Container Row CenterCA Padding="1rem" Hover={{ BG: '#EEEEEE' }}>
                <Container Row Width="9rem" Height="6rem" BG="transparent">
                  <RestaurantImage
                    src={getImage(res.images.indexImage)}
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                  />
                </Container>
                <Container
                  Column
                  StartCA
                  Padding="2rem"
                  Gap="0.6rem"
                  BG="transparent"
                >
                  <Text H3 N>
                    {res.name}
                  </Text>
                  <Text
                    H5
                    Muted
                  >{`${res.location.locality}, ${res.location.city}`}</Text>
                </Container>
              </Container>
            </Link>
          );
        })}
      </Container>
    </StyledRestaurantSuggestions>
  );
}

export default RestaurantSuggestions;
