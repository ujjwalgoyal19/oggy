import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Rating from 'app/components/atoms/rating';
import Text from 'app/components/atoms/text';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RestaurantCardProps {
  Id?: number;
  Image?: string;
  DeliveryRating?: any;
  DiningRating?: any;
  Cuisines?: string;
  Name?: string;
  CostForTwo?: string;
  Locality?: string;
  Skeleton?: boolean;
}

interface Rating {
  rating: number;
  reviewCount: number;
}

const RatingAggregation = (ratings: Rating[]) => {
  let rating = 0;
  let total = 0;
  for (const r of ratings) {
    if (r.rating != null) {
      rating += r.rating * r.reviewCount;
      total += 5 * r.reviewCount;
    }
  }
  if (rating === 0) {
    return '-';
  } else {
    return ((rating / total) * 5).toFixed(1);
  }
};

export function RestaurantCard(props: RestaurantCardProps) {
  const navigate = useNavigate();
  const device = useDeviceType();

  if (props.Skeleton) {
    return (
      <Container ClassName="Skeleton">
        {device.greaterThan('md') && (
          <Container
            Column
            Padding="1rem"
            ClassName="animate"
            Shape="CS1"
            Height="32rem"
            SpaceBetweenMA
            Gap="1.5rem"
          >
            <Container Shape="CS2" Height="100%" Skeleton />
            <Container Column Gap="1rem" Height="fit-content">
              <Container Height="2rem" Skeleton Shape="CS1" />
              <Container Height="2rem" Skeleton Shape="CS1" />
            </Container>
          </Container>
        )}
        {device.lessThan('md') && (
          <Container
            Width="calc(90 * var(--vw))"
            Height="40rem"
            BG="white"
            Elevation={{ L2: true }}
            Shape="CS3"
            Column
            Gap="2rem"
          >
            <Container Height="75%" Skeleton />
            <Container
              Column
              PaddingLeft="2rem"
              PaddingRight="2rem"
              CenterMA
              Gap="1.2rem"
              Height="25%"
            >
              <Container Skeleton Height="1.3rem" Shape="CS1" />
              <Container Skeleton Height="1.3rem" Shape="CS1" />
              <Container Skeleton Height="1.3rem" Shape="CS1" />
            </Container>
          </Container>
        )}
      </Container>
    );
  } else {
    return (
      <Container
        Width="100%"
        ClickHandler={() => {
          console.log('Hello');
          navigate(`/restaurant/${props.Id}`, { replace: true });
        }}
      >
        {device.greaterThan('md') && (
          <Container
            Column
            Hover={{}}
            Padding="1rem"
            ClassName="animate"
            Shape="CS1"
            Height="32rem"
            SpaceBetweenMA
            Gap="1.5rem"
          >
            <Container Shape="CS2" Height="100%">
              <Image Width="100%" Height="100%" Src={props.Image} />
            </Container>
            <Container Column Gap=".5rem" Height="fit-content">
              <Container
                SpaceBetweenMA
                Row
                Gap="2rem"
                Height="fit-content"
                CenterCA
              >
                <Text NoWrap={{ Width: '22rem' }} H4 B>
                  {props.Name}
                </Text>
                <Rating
                  Small
                  Rating={RatingAggregation(props.DeliveryRating)}
                />
              </Container>
              <Container
                Row
                SpaceBetweenMA
                Gap="2rem"
                Height="fit-content"
                CenterCA
              >
                <Text N NoWrap={{ Width: '100%' }} H4 Sub Color="Grey">
                  {props.Cuisines?.split(',')?.slice(0, 3)?.join(', ')}
                </Text>
                <Text
                  N
                  NoWrap={{ Width: '100%' }}
                  H4
                  Sub
                  style={{ textAlign: 'end' }}
                  Color="Grey"
                >
                  {props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}
                </Text>
              </Container>
              <Container Height="fit-content" CenterCA>
                <Text H4 Sub N style={{ opacity: '0.6' }} Color="Grey">
                  {props.Locality}
                </Text>
              </Container>
            </Container>
          </Container>
        )}
        {device.lessThan('md') && (
          <Container
            Width="calc(90 * var(--vw))"
            Height="40rem"
            Elevation={{ L2: true }}
            Shape="CS3"
            BG="white"
            Column
            Gap="1rem"
          >
            <Container Height="75%" OverflowHide>
              <Image Width="100%" Height="100%" Src={props.Image} />
            </Container>
            <Container
              Column
              Gap=".5rem"
              Height="fit-content"
              PaddingLeft="2rem"
              PaddingRight="2rem"
            >
              <Container
                SpaceBetweenMA
                Row
                Gap="2rem"
                Height="fit-content"
                CenterCA
              >
                <Text NoWrap={{ Width: '22rem' }} H3 B>
                  {props.Name}
                </Text>
                <Rating
                  Small
                  Rating={RatingAggregation(props.DeliveryRating)}
                />
              </Container>
              <Container
                Row
                SpaceBetweenMA
                Gap="2rem"
                Height="fit-content"
                CenterCA
              >
                <Text N NoWrap={{ Width: '100%' }} H3 Sub Color="Grey">
                  {props.Cuisines?.split(',')?.slice(0, 3)?.join(', ')}
                </Text>
                <Text
                  N
                  NoWrap={{ Width: '100%' }}
                  H3
                  Sub
                  style={{ textAlign: 'end' }}
                  Color="Grey"
                >
                  {props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}
                </Text>
              </Container>
              <Container Height="fit-content" CenterCA>
                <Text H4 Sub N style={{ opacity: '0.6' }} Color="Grey">
                  {props.Locality}
                </Text>
              </Container>
            </Container>
          </Container>
        )}
      </Container>
    );
  }
}

export default RestaurantCard;
