import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { GetRatingColor, GetVendorImage } from 'app/utils';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReviewProps {
  Reviews: any;
}

const StyledReview = styled.div``;

export function Review(props: ReviewProps) {
  const device = useDeviceType();
  return (
    <StyledReview>
      <Container
        Row={device.greaterThan('lg')}
        Column={device.lessThan('lg')}
        Height="fit-content"
        Gap="5rem"
      >
        {/* <Container
          Column
          BG="#ff9800"
          Padding="3rem"
          Shape="CS2"
          ClassName="shine"
          Border={{ Style: 'Solid', L2: true, Color: '#ff9800' }}
        >
          <Container
            Row
            Width="fit-content"
            MarginBottom="3rem"
            CenterCA
            BG="transparent"
          >
            <Text Color="white" H1 EB>
              Delivery
            </Text>
          </Container>
          {(props.Reviews.delivery.length > 0 && (
            <Container
              Row
              MinHeight="20rem"
              CenterCA
              Gap="4rem"
              BG="transparent"
              ScrollX
              ScrollStyle="Hide"
              PaddingBottom="2rem"
            >
              {props.Reviews.delivery.map((review: any) => {
                return (
                  <Container
                    Column
                    MinHeight="17rem"
                    MaxHeight="17rem"
                    MinWidth="20rem"
                    Width="fit-content"
                    Shape="CS2"
                    BG="white"
                    Padding="5rem"
                    CenterCA
                    CenterMA
                    Position={{ Type: 'relative' }}
                  >
                    <Container Column Gap=".5rem" Height="fit-content" CenterCA>
                      <Container
                        Height="fit-content"
                        Width="fit-content"
                        Row
                        CenterCA
                        Gap="1rem"
                      >
                        <Text
                          D5={review.rating}
                          H3={!review.rating}
                          EB={review.rating}
                          Color={
                            (review.rating && GetRatingColor(review.rating)) ||
                            'Grey'
                          }
                          N={!review.rating}
                        >
                          {review.rating ? review.rating : 'No ratings'}
                        </Text>
                        {review.rating && (
                          <AiFillStar
                            color={GetRatingColor(review.rating)}
                            size="28px"
                          />
                        )}
                      </Container>
                      <Text H5 B Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container
                      Height="fit-content"
                      Width="fit-content"
                      BG="transparent"
                      Position={{
                        Type: 'absolute',
                        Bottom: '0',
                        Right: '10px',
                      }}
                      Padding="1rem"
                    >
                      <Container Height="10px" Width="auto">
                        {GetVendorImage(review.vendor)}
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          )) || (
            <Text Color="white" H4 B>
              Not available for delivery on any platform
            </Text>
          )}
        </Container> */}
        <Container
          Column
          BG="White"
          Border={{ Style: 'Solid', L2: true, Color: '#ff9800' }}
          Padding="3rem"
          Shape="CS2"
        >
          <Container Row Width="fit-content" MarginBottom="3rem" CenterCA>
            <Text Color="#ff9800" H1 EB>
              Dining
            </Text>
          </Container>
          {(props.Reviews.dining.length > 0 && (
            <Container
              Row
              MinHeight="20rem"
              CenterCA
              Gap="4rem"
              ScrollX
              ScrollStyle="Hide"
              PaddingBottom="2rem"
            >
              {props.Reviews.dining.map((review: any) => {
                return (
                  <Container
                    Column
                    MinHeight="17rem"
                    MaxHeight="17rem"
                    MinWidth="20rem"
                    Width="fit-content"
                    Shape="CS2"
                    Border={{ Style: 'Dashed', Color: 'Grey', L2: true }}
                    Padding="5rem"
                    CenterCA
                    CenterMA
                    Position={{ Type: 'relative' }}
                    style={{ overflow: 'initial' }}
                  >
                    <Container Column Gap=".5rem" Height="fit-content" CenterCA>
                      <Container
                        Height="fit-content"
                        Width="fit-content"
                        Row
                        CenterCA
                        Gap="1rem"
                      >
                        <Text
                          D5
                          EB
                          Color={
                            (review.rating && GetRatingColor(review.rating)) ||
                            'LightGrey'
                          }
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <AiFillStar
                            color={GetRatingColor(review.rating)}
                            size="28px"
                          />
                        )}
                      </Container>
                      <Text H5 B Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container
                      Height="fit-content"
                      Width="fit-content"
                      BG="White"
                      Position={{
                        Type: 'absolute',
                        Bottom: '0',
                        Right: '10px',
                      }}
                      style={{ transform: 'translateY(50%)' }}
                      Padding="1rem"
                    >
                      <Container Height="10px" Width="auto">
                        {GetVendorImage(review.vendor)}
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          )) || (
            <Text H4 N>
              This restaurant does not have dining reviews
            </Text>
          )}
        </Container>
        <Container
          Column
          BG="White"
          Border={{ Style: 'Solid', L2: true, Color: '#ff9800' }}
          Padding="3rem"
          Shape="CS2"
        >
          <Container Row Width="fit-content" MarginBottom="3rem" CenterCA>
            <Text Color="#ff9800" H1 EB>
              Delivery
            </Text>
          </Container>
          {(props.Reviews.delivery.length > 0 && (
            <Container
              Row
              MinHeight="20rem"
              CenterCA
              Gap="4rem"
              ScrollX
              ScrollStyle="Hide"
              PaddingBottom="2rem"
            >
              {props.Reviews.delivery.map((review: any) => {
                return (
                  <Container
                    Column
                    MinHeight="17rem"
                    MaxHeight="17rem"
                    MinWidth="20rem"
                    Width="fit-content"
                    Shape="CS2"
                    Border={{ Style: 'Dashed', Color: 'Grey', L2: true }}
                    Padding="5rem"
                    CenterCA
                    CenterMA
                    Position={{ Type: 'relative' }}
                    style={{ overflow: 'initial' }}
                  >
                    <Container Column Gap=".5rem" Height="fit-content" CenterCA>
                      <Container
                        Height="fit-content"
                        Width="fit-content"
                        Row
                        CenterCA
                        Gap="1rem"
                      >
                        <Text
                          D5
                          EB
                          Color={
                            (review.rating && GetRatingColor(review.rating)) ||
                            'LightGrey'
                          }
                        >
                          {review.rating ? review.rating : '-'}
                        </Text>
                        {review.rating && (
                          <AiFillStar
                            color={GetRatingColor(review.rating)}
                            size="28px"
                          />
                        )}
                      </Container>
                      <Text H5 B Color="Grey">
                        {review.count
                          ? review.count + ' reviews'
                          : 'No reviews'}
                      </Text>
                    </Container>
                    <Container
                      Height="fit-content"
                      Width="fit-content"
                      BG="White"
                      Position={{
                        Type: 'absolute',
                        Bottom: '0',
                        Right: '10px',
                      }}
                      style={{ transform: 'translateY(50%)' }}
                      Padding="1rem"
                    >
                      <Container Height="10px" Width="auto">
                        {GetVendorImage(review.vendor)}
                      </Container>
                    </Container>
                  </Container>
                );
              })}
            </Container>
          )) || (
            <Text H4 N>
              This restaurant does not have delivery reviews
            </Text>
          )}
        </Container>
      </Container>
    </StyledReview>
  );
}

export default Review;
