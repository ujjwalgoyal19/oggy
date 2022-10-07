import Container from 'app/components/atoms/container';
import Rating from 'app/components/atoms/rating';
import Text from 'app/components/atoms/text';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantCardProps {
  Id?: number;
  Image?: string;
  DeliveryRating?: any;
  DiningRating?: any;
  Cuisines?: string;
  Name?: string;
  CostForTwo?: string;
  Skeleton?: boolean;
}

interface Rating {
  rating: number;
  reviewCount: number;
}

const RatingAggregation = (ratings: Rating[]) => {
  let rating = 0;
  let total = 0;
  for (const r of ratings) {
    if (r.rating != null) {
      rating += r.rating * r.reviewCount;
      total += 5 * r.reviewCount;
    }
  }
  if (rating === 0) {
    return '-';
  } else {
    return ((rating / total) * 5).toFixed(1);
  }
};

interface IRestaurantShowcase {
  skeleton?: boolean;
}
interface IRestaurantRating {
  skeleton?: boolean;
}

const RestaurantShowcase = styled.div<IRestaurantShowcase>`
  border-radius: 1.5rem;
  overflow: hidden;
  width: 100%;
  height: 80%;
  min-height: 80%;
`;
const RestaurantRating = styled.div<IRestaurantRating>`
  position: absolute;
  top: 0;
`;
const RestaurantImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  border-radius: 2rem;
  filter: unset;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
`;

const StyledRestaurantCard = styled.div`
  box-sizing: border-box;
  position: relative;
  font-family: Raleway;
  width: 100%;
  height: 100%;
  overflow: hidden;
  min-height: 35rem;
  max-height: 35rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem;
  transition: box-shadow 0.2s ease;
  border: 0.1rem solid rgb(255, 255, 255);
  &:hover {
    box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
    border-color: rgb(232, 232, 232);
  }
`;

export function RestaurantCard(props: RestaurantCardProps) {
  const imageFile = {
    src: props.Image,
    width: '100%',
    height: '100%',
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <Link
      to={`/restaurant/${props.Id}`}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {
        <Container
          Column
          BG="white"
          Elevation={{ L1: true }}
          style={{ overflow: 'hidden' }}
          Border={{ Elegant: true, L2: true }}
          Shape="CS3"
        >
          <Container Height="25vh">
            <RestaurantImage
              src={imageFile.src}
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
          <Container Column Padding="2rem" Gap=".4rem">
            <Container SpaceBetweenMA Row>
              <Text NoWrap={{ Width: '22rem' }} H3 N>
                {props.Name}
              </Text>
              <Rating Small Rating={RatingAggregation(props.DeliveryRating)} />
            </Container>
            <Container SpaceBetweenMA Row>
              <Text NoWrap={{ Width: '18rem' }} H4>
                {props.Cuisines}
              </Text>
              <Text H4>
                {props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}
              </Text>
            </Container>
          </Container>
        </Container>
      }
      {/* <StyledRestaurantCard ref={ref}>
        <RestaurantShowcase>
          <RestaurantImage
            src={imageFile.src}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
          />
        </RestaurantShowcase>
        <Container Column MarginTop="1.2rem" Gap=".8rem">
          <Container SpaceBetweenMA Row Gap="3rem">
            <Text NoWrap={{ Width: '22rem' }} H3 N>
              {props.Name}
            </Text>
            <Rating Small Rating={RatingAggregation(props.DeliveryRating)} />
          </Container>
          <Container SpaceBetweenMA Row>
            <Text NoWrap={{ Width: '18rem' }} H4>
              {props.Cuisines}
            </Text>
            <Text H4>{props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}</Text>
          </Container>
        </Container>
        <RestaurantRating></RestaurantRating>
      </StyledRestaurantCard> */}
    </Link>
  );
}

export default RestaurantCard;
