import config from 'app/config';
import styled, { css } from 'styled-components';
import Image from 'app/components/atoms/image';
import { GetRatingColor } from 'app/utils';
import Text from '../text';
import Images from 'app/constants/images';

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
      padding: 0.8rem;
      border-radius: 0.4rem;
      width: 4.8rem;
      height: 2.5rem;
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

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function Rating(props: RatingProps) {
  return (
    <StyledRating
      Color={GetRatingColor(props.Rating)}
      Small={props.Small}
      Large={props.Large}
    >
      <Text EB H4>
        {props.Rating.toString()}
      </Text>
      <Image Src={Images.Icons.Star} />
    </StyledRating>
  );
}

export default Rating;
