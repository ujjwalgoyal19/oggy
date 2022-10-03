import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import Star from 'app/graphics/star.graphic';
import { GetRatingColor, GetVendorImage } from 'app/utils';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReviewProps {
  Reviews: any;
}

const StyledReview = styled.div``;

export function Review(props: ReviewProps) {
  console.log(props.Reviews);
  return (
    <StyledReview>
      <Container Column Height="fit-content" Gap="10vh">
        {props.Reviews.delivery.length > 0 && (
          <Container Row CenterCA Height="15rem">
            <Container Row Width="fit-content" MarginRight="6rem" CenterCA>
              <Text Color="LightGrey" D5 EB Vertical>
                Delivery
              </Text>
            </Container>
            <Container Row Height="100%" CenterCA Gap="15%">
              {props.Reviews.delivery.map((review: any) => {
                return (
                  <Container Column Height="100%" EndMA Width="fit-content" >
                    <Container Column Gap=".5rem">
                      <Container Height="fit-content" Row CenterCA Gap="1rem">
                        <Text
                          D5
                          EB
                          Color={review.rating && GetRatingColor(review.rating)}
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <Star
                            Fill={
                              review.rating && GetRatingColor(review.rating)
                            }
                          />
                        )}
                      </Container>
                      <Text H3 Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container Height="fit-content">
                      {GetVendorImage(review.vendor)}
                    </Container>
                  </Container>
                );
              })}
            </Container>
          </Container>
        )}
        {props.Reviews.dining.length > 0 && (
          <Container Row CenterCA Height="15rem">
            <Container Row Width="fit-content" MarginRight="6rem" CenterCA>
              <Text Color="LightGrey" D5 EB Vertical>
                Dining
              </Text>
            </Container>
            <Container Row Height="100%" CenterCA Gap="15%">
              {props.Reviews.dining.map((review: any) => {
                return (
                  <Container Column Height="100%" EndMA Width="fit-content">
                    <Container Column Gap=".5rem">
                      <Container Height="fit-content" Row CenterCA Gap="1rem">
                        <Text
                          D5
                          EB
                          Color={review.rating && GetRatingColor(review.rating)}
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <Star
                            Fill={
                              review.rating && GetRatingColor(review.rating)
                            }
                          />
                        )}
                      </Container>
                      <Text H3 Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container Height="fit-content">
                      {GetVendorImage(review.vendor)}
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
