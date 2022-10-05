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
import { useEffect, useState } from 'react';
import {
  RatingAggregation,
  RatingArrayCreate,
  CreateCuisineString,
} from 'app/utils';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantPageTemplateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Data: any;
}

const StyledRestaurantPageTemplate = styled.div`
  min-height: 100vh;
`;

export function RestaurantPageTemplate(props: RestaurantPageTemplateProps) {
  const Sections = ['Overview', 'Offers', 'Reviews', 'Photos'];
  const [activeSection, setActiveSection] = useState(0);
  const changeSectionHandler = (index: number) => {
    setActiveSection(index);
  };
  useEffect(() => {
    console.log(props.Data);
  }, []);
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
                  {CreateCuisineString(props.Data.cuisines)}
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
          0: (
            <Overview
              Data={props.Data}
              Features={
                props.Data.about.features.length > 0 &&
                props.Data.about.features
              }
              PeopleLiked={
                props.Data.about.people_liked.length > 0 &&
                props.Data.about.people_liked
              }
              TopTags={
                props.Data.about.top_tags.length > 0 &&
                props.Data.about.top_tags
              }
              TopDishes={
                props.Data.about.top_dishes.length > 0 &&
                props.Data.about.top_dishes
              }
              CFT={props.Data.cft && props.Data.cft}
            />
          ),
          1: <Offers Offers={props.Data.offer_details} />,
          2: (
            <Review
              Reviews={{
                dining: RatingArrayCreate(props.Data.dining_rating),
                delivery: RatingArrayCreate(props.Data.delivery_rating),
              }}
              // Reviews={RatingArrayCreate(
              //   props.Data.dining_rating,
              //   props.Data.delivery_rating
              // )}
            />
          ),
          3: <Photos Image={props.Data.images.all} />,
        }[activeSection] || <Overview Data={props.Data} />}
      </Section>
    </StyledRestaurantPageTemplate>
  );
}

export default RestaurantPageTemplate;
