import config from 'app/config';
import styled, { css } from 'styled-components';
import Image from 'app/components/atoms/image';
import { GetRatingColor } from 'app/utils';

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
  margin: 0;
`;

export function Rating(props: RatingProps) {
  return (
    <StyledRating
      Color={GetRatingColor(props.Rating)}
      Small={props.Small}
      Large={props.Large}
    >
      <Text>{props.Rating}</Text>
      <Image Image={config.images.StarIcon} />
    </StyledRating>
  );
}

export default Rating;
