import config from 'app/config';
import styled from 'styled-components';
import Image from 'app/components/atoms/image';

/* eslint-disable-next-line */
export interface RatingProps {
  Rating: number | string;
}

interface IStyledRating {
  Color: string;
}

const StyledRating = styled.div<IStyledRating>`
  height: fit-content;
  border-radius: 0.4rem;
  background-color: ${(props) => props.Color};
  width: 4rem;
  height: 2.3rem;

  // padding: 0.3rem 0.4rem;
  font-family: Roboto;
  font-weight: 600;
  font-size: 1.3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

const Text = styled.p`
  display: inline-block;
  padding-top: 0.2rem;
  margin: 0;
`;

export function Rating(props: RatingProps) {
  let color: string;
  if (props.Rating === '-') {
    color = 'lightgrey';
  } else if (props.Rating <= 1) {
    color = '#C21010';
  } else if (props.Rating <= 2) {
    color = '#E64848';
  } else if (props.Rating <= 3) {
    color = '#FFC54D';
  } else if (props.Rating <= 4) {
    color = '#5BB318';
  } else {
    color = '#2B7A0B';
  }
  return (
    <StyledRating Color={color}>
      <Text>{props.Rating}</Text>
      <Image Image={config.images.StarIcon} />
    </StyledRating>
  );
}

export default Rating;
