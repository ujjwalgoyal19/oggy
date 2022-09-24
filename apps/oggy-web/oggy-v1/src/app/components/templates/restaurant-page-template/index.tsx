import Container from 'app/components/atoms/container';
import Rating from 'app/components/atoms/rating';
import Section from 'app/components/atoms/section';
import TabBar from 'app/components/atoms/tab-bar';
import ImageGallery from 'app/components/organisms/image-gallery';
import Review from 'app/components/organisms/review';
import Offers from 'app/components/organisms/offers';
import Overview from 'app/components/organisms/overview';
import Photos from 'app/components/organisms/photos';
import Text from 'app/components/atoms/text';
import { useState } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantPageTemplateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Data: any;
}

const StyledRestaurantPageTemplate = styled.div`
  min-height: 100vh;
`;

interface RatingEntity {
  rating: string | null;
  reviewCount: string | null;
}

const RatingArrayCreate = (diningRatings: any, deliveryRatings: any) => {
  const rating = new Map();
  rating.set('Zomato', []);
  rating.set('Swiggy', []);
  rating.set('Dineout', []);
  rating.set('Eazydiner', []);
  Object.entries(diningRatings).map(([k, v]) => {
    const r = v as RatingEntity;
    let vendor = '';
    if (k.at(0) === 'z') {
      vendor = 'Zomato';
    } else if (k.at(0) === 's') {
      vendor = 'Swiggy';
    } else if (k.at(0) === 'd') {
      vendor = 'Dineout';
    } else {
      vendor = 'Eazydiner';
    }
    rating.get(vendor).push({ type: 'Dining', value: r });
  });
  Object.entries(deliveryRatings).map(([k, v]) => {
    const r = v as RatingEntity;
    let vendor = '';
    if (k.at(0) === 'z') {
      vendor = 'Zomato';
    } else if (k.at(0) === 's') {
      vendor = 'Swiggy';
    } else if (k.at(0) === 'd') {
      vendor = 'Dineout';
    } else {
      vendor = 'Eazydiner';
    }
    rating.get(vendor).push({ type: 'Delivery', value: r });
  });
  return rating;
};

const RatingAggregation = (ratings: any, aggregationType = 'rating') => {
  let rating = 0;
  let total = 0;
  let reviews = 0;
  Object.entries(ratings).forEach(([k, v]) => {
    const r = v as RatingEntity;
    if (r.rating != null) {
      rating +=
        parseFloat(r.rating) * parseFloat(r.reviewCount ? r.reviewCount : '1');
      total += 5 * parseInt(r.reviewCount ? r.reviewCount : '1');
      reviews += parseFloat(r.reviewCount || '0');
    }
  });
  if (aggregationType !== 'rating') {
    return reviews === 0 ? '-' : reviews.toString();
  } else {
    if (rating === 0) {
      return '-';
    } else {
      return ((rating / total) * 5).toFixed(1);
    }
  }
};

interface CuisineEntity {
  cuisine_name: string;
  cuisine_id: number;
}

interface TimingEntity {
  days: string;
  timings: string;
}

const CreateCuisineString = (cuisines: CuisineEntity[]) => {
  return cuisines
    .map((cuisine: CuisineEntity) => {
      return cuisine.cuisine_name;
    })
    .slice(0, 4)
    .join(', ');
};

export function RestaurantPageTemplate(props: RestaurantPageTemplateProps) {
  const Sections = ['Overview', 'Offers', 'Reviews', 'Photos'];
  const [activeSection, setActiveSection] = useState(0);
  const changeSectionHandler = (index: number) => {
    setActiveSection(index);
  };
  console.log(props.Data);
  return (
    <StyledRestaurantPageTemplate>
      <Section Width="100%" Sticky BackgroundColor="white">
        <Section Width="70%">
          <ImageGallery Images={props.Data.images.all} />
        </Section>
        <Section Width="70%" MarginBottom="2rem" Sticky>
          <Container Row SpaceBetweenMA PaddingTop="3rem">
            <Container Column>
              <Container Row>
                <Text H1 B NoWrap={{ Width: '20vw' }}>
                  {props.Data.name}
                </Text>
              </Container>
              <Container Row MarginTop="0.8rem">
                <Text H3 L NoWrap={{ Width: '30vw' }} Color="rgb(105,105,105)">
                  {CreateCuisineString(props.Data.cuisines as CuisineEntity[])}
                </Text>
              </Container>
              <Container Row MarginTop="0.5rem">
                <Text
                  H3
                  L
                  Sub
                  Color="rgb(156,156,156)"
                >{`${props.Data.location.locality}, ${props.Data.location.city}`}</Text>
              </Container>
            </Container>
            <Container Row EndMA Gap="5vw">
              <Container Width="fit-content" Row CenterCA Gap="1rem">
                <Rating
                  Large
                  Rating={RatingAggregation(
                    props.Data.delivery_rating,
                    'rating'
                  )}
                />
                <Container Column>
                  <Text H4 B>
                    {RatingAggregation(props.Data.delivery_rating, 'reviews')}
                  </Text>
                  <Text H5 Muted>
                    Delivery Reviews
                  </Text>
                </Container>
              </Container>
              <Container Width="fit-content" Row CenterCA Gap="1rem">
                <Rating
                  Large
                  Rating={RatingAggregation(props.Data.dining_rating)}
                />
                <Container Column>
                  <Text H4 B>
                    {RatingAggregation(props.Data.dining_rating, 'reviews')}
                  </Text>
                  <Text H5 Muted>
                    Dining Reviews
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container Row Height="8rem">
            <TabBar
              Horizontal
              Sections={Sections}
              ActiveSection={activeSection}
              ChangeSection={changeSectionHandler}
            />
          </Container>
        </Section>
      </Section>
      <Section Width="70%" MarginBottom="20rem" MarginTop="5rem">
        {{
          0: <Overview Data={props.Data} />,
          1: <Offers Offers={props.Data.offer_details} />,
          2: (
            <Review
              Reviews={RatingArrayCreate(
                props.Data.dining_rating,
                props.Data.delivery_rating
              )}
            />
          ),
          3: <Photos Image={props.Data.images.all} />,
        }[activeSection] || <Overview Data={props.Data} />}
      </Section>
    </StyledRestaurantPageTemplate>
  );
}

export default RestaurantPageTemplate;
