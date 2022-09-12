import Rating from 'app/components/atoms/rating';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantCardProps {
  Image: string;
  Link: string;
  DeliveryRating: any;
  DiningRating: any;
  Cuisines: string;
  Name: string;
  CostForTwo: number;
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
interface IRestaurantName {
  skeleton?: boolean;
}
interface IRestaurantCuisines {
  skeleton?: boolean;
}
interface IRestaurantCostForTwo {
  skeleton?: boolean;
}
interface IRestaurantRating {
  skeleton?: boolean;
}

const RestaurantShowcase = styled.div<IRestaurantShowcase>`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  min-height: 80%;
  max-height: 80%;
`;
const RestaurantInformation = styled.div`
  margin-top: 1.4rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;
const RestaurantInformationWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const RestaurantName = styled.h4<IRestaurantName>`
  margin: 0;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.8rem;
`;
const RestaurantCuisines = styled.p<IRestaurantCuisines>`
  margin: 0;
  width: 18rem;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 500;
  color: grey;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /* give the beautiful '...' effect */
`;
const RestaurantCostForTwo = styled.p<IRestaurantCostForTwo>`
  margin: 0;
  font-family: Raleway;
  font-size: 1.4rem;
  font-weight: 500;
  color: grey;
  > span {
    font-family: Roboto;
    font-weight: 400;
  }
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

interface IRestaurantCard {
  skeleton?: boolean;
}

const StyledRestaurantCard = styled.div<IRestaurantCard>`
  box-sizing: border-box;
  position: relative;
  font-family: Raleway;
  width: 100%;
  min-height: 40rem;
  max-height: 40rem;
  border-radius: 2rem;
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
  ${(props) =>
    props.skeleton &&
    css`
      & ${RestaurantShowcase} {
        background: #949494 !important; /* Customizable skeleton loader color */
        color: rgba(0, 0, 0, 0) !important;
        border-color: rgba(0, 0, 0, 0) !important;
        user-select: none;
        cursor: wait;
        & * {
          visibility: hidden !important;
        }
        &:empty::after,
        & *:empty::after {
          content: '\00a0';
        }
      }
      & ${RestaurantInformationWrapper} {
        background: #949494 !important; /* Customizable skeleton loader color */
        color: rgba(0, 0, 0, 0) !important;
        border-color: rgba(0, 0, 0, 0) !important;
        user-select: none;
        cursor: wait;
        & * {
          visibility: hidden !important;
        }
        &:empty::after,
        & *:empty::after {
          content: '\00a0';
        }
      }
    `}
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
    <StyledRestaurantCard ref={ref}>
      <RestaurantShowcase skeleton={props.Skeleton}>
        {inView ? (
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
        ) : null}
      </RestaurantShowcase>
      <RestaurantInformation>
        <RestaurantInformationWrapper>
          <RestaurantName>{props.Name}</RestaurantName>
          <Rating Rating={RatingAggregation(props.DeliveryRating)} />
        </RestaurantInformationWrapper>
        <RestaurantInformationWrapper>
          <RestaurantCuisines>{props.Cuisines}</RestaurantCuisines>
          <RestaurantCostForTwo>
            <span>{props.CostForTwo}</span> ₹ for two
          </RestaurantCostForTwo>
        </RestaurantInformationWrapper>
      </RestaurantInformation>
      <RestaurantRating></RestaurantRating>
    </StyledRestaurantCard>
  );
}

export default RestaurantCard;
