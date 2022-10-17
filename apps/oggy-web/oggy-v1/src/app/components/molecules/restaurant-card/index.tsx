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
              <Container Height="2rem" Skeleton />
              <Container Height="2rem" Skeleton />
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
              Gap="2rem"
              Height="25%"
            >
              <Container Skeleton Height="2rem" Shape="CS1" />
              <Container Skeleton Height="2rem" Shape="CS1" />
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
          navigate(`/restaurant/${props.Id}`);
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
            <Container Column Gap="0.5rem" Height="fit-content">
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
                <Text NoWrap={{ Width: '100%' }} H5 Color="Grey">
                  {props.Cuisines?.split(',')?.slice(0, 3)?.join(', ')}
                </Text>
                <Text
                  NoWrap={{ Width: '100%' }}
                  H5
                  style={{ textAlign: 'end' }}
                  Color="Grey"
                >
                  {props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}
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
          >
            <Container Height="75%" OverflowHide>
              <Image Width="100%" Height="100%" Src={props.Image} />
            </Container>
            <Container
              Column
              PaddingLeft="2rem"
              PaddingRight="2rem"
              CenterMA
              Gap="8px"
              Height="25%"
            >
              <Container SpaceBetweenMA Row Gap="2rem" Height="fit-content">
                <Text NoWrap={{ Width: '100%' }} H3 N>
                  {props.Name}
                </Text>
                <Rating
                  Small
                  Rating={RatingAggregation(props.DeliveryRating)}
                />
              </Container>
              <Container Row SpaceBetweenMA Gap="2rem" Height="fit-content">
                <Text NoWrap={{ Width: '100%' }} H4>
                  {props.Cuisines?.split(',')?.slice(0, 3)?.join(', ')}
                </Text>
                <Text
                  NoWrap={{ Width: '100%' }}
                  H4
                  style={{ textAlign: 'end' }}
                >
                  {props.CostForTwo?.replace(/\D/g, '') + '₹ for two'}
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
