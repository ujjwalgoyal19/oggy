import styled, { css } from 'styled-components';
import Image from 'app/components/atoms/image';
import { GetRatingColor } from 'app/utils';
import { AiFillStar } from 'react-icons/ai';
import Text from '../text';
import Images from 'app/constants/images';
import Container from '../container';

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
  background-color: ${(props) => props.Color};
  min-width: 60px;
  ${(props) =>
    props.Small &&
    css`
      padding: 4px;
      border-radius: 0.4rem;
      --gap-rating: 0.4rem;
    `}
  ${(props) =>
    props.Large &&
    css`
      padding: 5px;
      border-radius: 0.8rem;
      --gap-rating: 0.7rem;
    `}
`;

export function Rating(props: RatingProps) {
  return (
    <StyledRating
      Color={GetRatingColor(props.Rating)}
      Small={props.Small}
      Large={props.Large}
    >
      <Container CenterMA>
        <Container
          Row
          CenterCA
          SpaceBetweenMA
          Gap="var(--gap-rating)"
          Width="fit-content"
        >
          <Text Color="white" EB H4>
            {props.Rating.toString()}
          </Text>
          <AiFillStar color="white" size="14px" />
        </Container>
      </Container>
    </StyledRating>
  );
}

export default Rating;
