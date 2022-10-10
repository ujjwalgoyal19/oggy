import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import Star from 'app/graphics/star.graphic';
import { GetRatingColor, GetVendorColor, GetVendorImage } from 'app/utils';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReviewProps {
  Reviews: any;
}

const StyledReview = styled.div``;

export function Review(props: ReviewProps) {
  return (
    <StyledReview>
      <Container Column Height="fit-content" Gap="10vh">
        {props.Reviews.delivery.length > 0 && (
          <Container Column>
            <Container Row Width="fit-content" MarginBottom="3rem" CenterCA>
              <Text Color="Grey" H1 EB>
                Delivery
              </Text>
            </Container>
            <Container Row Height="100%" CenterCA Gap="15%">
              {props.Reviews.delivery.map((review: any) => {
                return (
                  <Container
                    Column
                    Height="max(21rem, calc(20 * var(--vh)))"
                    SpaceBetweenMA
                    Width="30rem"
                    Shape="CS2"
                    Border={{ Style: 'Dashed', Color: 'Grey', L2: true }}
                    Padding="3rem"
                  >
                    <Container Column Gap=".5rem">
                      <Container Height="fit-content" Row CenterCA Gap="1rem">
                        <Text
                          D5
                          EB
                          Color={
                            (review.rating && GetRatingColor(review.rating)) ||
                            'Grey'
                          }
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <AiFillStar color={GetRatingColor(review.rating)} />
                        )}
                      </Container>
                      <Text H3 N Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container Height="fit-content" EndMA>
                      <Container Height="1.6rem" Width="fit-content">
                        {GetVendorImage(review.vendor)}
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Container>
        )}
        {props.Reviews.dining.length > 0 && (
          <Container Column>
            <Container Row Width="fit-content" MarginBottom="3rem" CenterCA>
              <Text Color="Grey" H1 EB>
                Dining
              </Text>
            </Container>
            <Container Row Height="100%" CenterCA Gap="15%">
              {props.Reviews.dining.map((review: any) => {
                return (
                  <Container
                    Column
                    Height="max(21rem, calc(20 * var(--vh)))"
                    SpaceBetweenMA
                    Width="30rem"
                    Shape="CS2"
                    Border={{ Style: 'Dashed', Color: 'Grey', L2: true }}
                    Padding="3rem"
                  >
                    <Container Column Gap=".5rem">
                      <Container Height="fit-content" Row CenterCA Gap="1rem">
                        <Text
                          D5
                          EB
                          Color={
                            (review.rating && GetRatingColor(review.rating)) ||
                            'Grey'
                          }
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <AiFillStar color={GetRatingColor(review.rating)} />
                        )}
                      </Container>
                      <Text H3 N Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container Height="fit-content" EndMA>
                      <Container Height="1.6rem" Width="fit-content">
                        {GetVendorImage(review.vendor)}
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Container>
        )}
      </Container>
    </StyledReview>
  );
}

export default Review;
