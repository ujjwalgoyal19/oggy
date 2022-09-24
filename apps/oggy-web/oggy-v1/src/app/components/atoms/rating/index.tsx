import config from 'app/config';
import styled, { css } from 'styled-components';
import Image from 'app/components/atoms/image';

/* eslint-disable-next-line */
export interface RatingProps {
  Rating: number | string;
  Small?: boolean;
  Large?: boolean;
}

interface IStyledRating {
  Color: string;
  Small?: boolean;
  Large?: boolean;
}

const StyledRating = styled.div<IStyledRating>`
  box-sizing: border-box;
  background-color: ${(props) => props.Color};
  ${(props) =>
    props.Small &&
    css`
      padding: 0.5rem;
      border-radius: 0.4rem;
      width: 4rem;
      height: 2.3rem;
      font-size: 1.3rem;
      gap: 0.4rem;
    `}
  ${(props) =>
    props.Large &&
    css`
      padding: 0 0.8rem;
      border-radius: 0.8rem;
      width: 6rem;
      height: 2.7rem;
      font-size: 1.75rem;
      gap: 0.7rem;
    `}

  font-family: Roboto;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-weight: 600;
  display: inline-block;
  // padding-top: 0.2rem;
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
    <StyledRating Color={color} Small={props.Small} Large={props.Large}>
      <Text>{props.Rating}</Text>
      <Image Image={config.images.StarIcon} />
    </StyledRating>
  );
}

export default Rating;
