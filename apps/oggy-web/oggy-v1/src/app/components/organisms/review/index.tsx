import Container from 'app/components/atoms/container';
import Rating from 'app/components/atoms/rating';
import Text from 'app/components/atoms/text';
import { format } from 'path';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReviewProps {
  Reviews: Map<string, any>;
}

const StyledReview = styled.div``;

const Card = styled.div`
  box-shadow: 0 0 1rem 0.2rem rgba(0, 0, 0, 0.1);
  border-color: rgb(232, 232, 232);
  width: 100%;
  max-width: 47.5%;
  margin-bottom: 4rem;
`;

export function Review(props: ReviewProps) {
  console.log(Array.from(props.Reviews.entries()));
  return (
    <StyledReview>
      <Container Row Gap="5%" Wrap>
        {Array.from(props.Reviews.entries()).map((review) => {
          return (
            <Card>
              <Container Row Padding="3rem" SpaceBetweenCA SpaceBetweenMA>
                <Container Row Width="fit-content">
                  <Text H1 B>
                    {review[0]}
                  </Text>
                </Container>

                <Container Row EndMA>
                  {review[1].map((rating: any) => {
                    return (
                      <Container Width="fit-content" Row CenterCA Gap="1rem">
                        <Rating
                          Large
                          Rating={
                            rating.value.rating ? rating.value.rating : '-'
                          }
                        />
                        <Container Column>
                          <Text H4 B>
                            {rating.value.reviewCount
                              ? rating.value.reviewCount
                              : '-'}
                          </Text>
                          <Text H5 Muted>
                            {rating.type} Reviews
                          </Text>
                        </Container>
                      </Container>
                    );
                  })}
                </Container>
              </Container>
            </Card>
          );
        })}
        {/* {props.Reviews.map((rating: any) => {
            console.log(rating);
            return (
              <
            );
          })} */}
      </Container>
    </StyledReview>
  );
}

export default Review;
