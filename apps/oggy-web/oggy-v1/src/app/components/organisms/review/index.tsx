import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { GetRatingColor } from 'app/utils';
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
      <Container Row Gap="5%" Wrap>
        {props.Reviews.delivery.length > 0 && (
          <Container Row CenterCA>
            <Container Row Width="fit-content" MarginRight="6rem">
              <Text Color="LightGrey" D5 EB Vertical>
                Delivery
              </Text>
            </Container>
            <Container Row>
              {props.Reviews.delivery.map((review: any) => {
                return (
                  <Container Column>
                    {review.rating ? (
                      <Text H1 Color={GetRatingColor(review.rating)}>
                        {review.rating}
                      </Text>
                    ) : (
                      <Text H1> - </Text>
                    )}
                    <Text H1>
                      {review.count ? review.count + ' reviews' : 'No reviews'}
                    </Text>
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
