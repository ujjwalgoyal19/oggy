import Container from 'app/components/atoms/container';
import Rating from 'app/components/atoms/rating';
import Text from 'app/components/atoms/text';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const RestaurantImage = styled(motion.img)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  filter: unset;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
`;

const StyledRestaurantCard = styled.div`
  .animate {
    transition: box-shadow 0.2s ease;
    border: 0.1rem solid rgb(255, 255, 255);
    &:hover {
      box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
      border-color: rgb(232, 232, 232);
    }
  }
`;

export function RestaurantCard(props: RestaurantCardProps) {
  const imageFile = {
    src: props.Image,
    width: '100%',
    height: '100%',
  };

  const device = useDeviceType();

  return (
    <StyledRestaurantCard>
      <Link
        to={`/restaurant/${props.Id}`}
        style={{
          display: 'block',
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        {device.greaterThan('md') ? (
          <Container
            Column
            Padding="1.6rem"
            ClassName="animate"
            style={{ overflow: 'hidden' }}
            Shape="CS1"
            MinHeight="35rem"
            MaxHeight="35rem"
            SpaceBetweenMA
            Gap="1.5rem"
          >
            <Container
              style={{ overflow: 'hidden' }}
              Shape="CS2"
              Height="70%"
              Basis="70%"
              Grow
            >
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
            <Container Column Gap=".4rem" Basis="30%">
              <Container SpaceBetweenMA Row>
                <Text NoWrap={{ Width: '22rem' }} H3 N>
                  {props.Name}
                </Text>
                <Rating
                  Small
                  Rating={RatingAggregation(props.DeliveryRating)}
                />
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
        ) : (
          <Container
            Column
            BG="white"
            Elevation={{ L1: true }}
            style={{ overflow: 'hidden' }}
            Border={{ Style: 'Solid', L1: true }}
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
                <Rating
                  Small
                  Rating={RatingAggregation(props.DeliveryRating)}
                />
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
        )}
      </Link>
    </StyledRestaurantCard>
  );
}

export default RestaurantCard;
