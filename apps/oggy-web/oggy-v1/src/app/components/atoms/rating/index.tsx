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

const StyledRating = styled.div``;

export function Rating(props: RatingProps) {
  return (
    <StyledRating>
      <Container CenterMA>
        <Container
          Row
          CenterCA
          SpaceBetweenMA
          // Width="50px"
          Padding="5px 8px"
          Shape="CS0"
          Gap="6px"
          BG={GetRatingColor(props.Rating)}
        >
          <Container CenterMA Width="20px">
            {(props.Small && (
              <Text Color="white" style={{ fontWeight: 700 }} H5>
                {props.Rating.toString()}
              </Text>
            )) || (
              <Text Color="white" style={{ fontWeight: 700 }} H4>
                {props.Rating.toString()}
              </Text>
            )}
          </Container>
          <Container Width="fit-content">
            <AiFillStar color="white" size="14px" />
          </Container>
        </Container>
      </Container>
    </StyledRating>
  );
}

export default Rating;
