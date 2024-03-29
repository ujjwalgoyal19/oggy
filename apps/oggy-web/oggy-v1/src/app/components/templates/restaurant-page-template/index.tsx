import Container from 'app/components/atoms/container';
import Rating from 'app/components/atoms/rating';
import TabBar from 'app/components/atoms/tab-bar';
import Review from 'app/components/organisms/review';
import Offers from 'app/components/organisms/offers';
import Overview from 'app/components/organisms/overview';
import Photos from 'app/components/organisms/photos';
import Text from 'app/components/atoms/text';
import {
  RatingAggregation,
  RatingArrayCreate,
  CreateCuisineString,
} from 'app/utils';
import styled from 'styled-components';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { useLocation, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface RestaurantPageTemplateProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Section?: number;
  Data?: any;
  Skeleton?: boolean;
}

const StyledRestaurantPageTemplate = styled.div`
  min-height: 100vh;
`;

export function RestaurantPageTemplate(props: RestaurantPageTemplateProps) {
  const device = useDeviceType();
  const navigate = useNavigate();
  const location = useLocation();
  const mobileNavHeader = document.querySelector('.mobile-nav__header');
  const Sections = ['Overview', 'Offers', 'Reviews', 'Photos'];
  const changeSectionHandler = (index: number) => {
    const loc = location.pathname.split('/');
    const sectionName = Sections.at(index)?.toLowerCase();
    navigate(`/${loc[1]}/${loc[2]}/${sectionName}`, { replace: true });
  };
  if (props.Skeleton) {
    return (
      <Container
        CenterCA
        PaddingTop="3rem"
        Column
        Height="calc(100 * var(--vh))"
      >
        <Container
          Width="var(--restaurant-page-width)"
          Column
          Height="fit-content"
          Gap="5rem"
        >
          <Container Row>
            <Container Column Gap="2rem">
              <Container Skeleton Height="1rem" Width="70%" Shape="CS0" />
              <Container Skeleton Height="1rem" Width="50%" Shape="CS0" />
              <Container Skeleton Height="1rem" Width="30%" Shape="CS0" />
            </Container>
            <Container Width="6rem" Height="3rem" Skeleton Shape="CS2" />
          </Container>
          <Container Column>
            <Container
              Height="10rem"
              Width="100%"
              Skeleton
              MarginBottom="4rem"
            />
            <Container Column Gap="1rem">
              <Container
                Width="70%"
                Height="2rem"
                Skeleton
                Shape="CS0"
                MarginBottom="1rem"
              />
              <Container Width="50%" Height="1rem" Skeleton Shape="CS0" />
              <Container Width="40%" Height="1rem" Skeleton Shape="CS0" />
              <Container Height="20rem" Skeleton MarginTop="3rem" />
            </Container>
          </Container>
        </Container>
      </Container>
    );
  } else if (props.Section !== undefined && props.Data !== undefined) {
    return (
      <StyledRestaurantPageTemplate>
        <Container Column Width="calc(100 * var(--vw))" CenterCA>
          <Container
            Column
            CenterCA
            CenterMA
            BG="white"
            Width="var(--restaurant-page-width)"
            Position={{
              Type: 'sticky',
              Top: `${
                (mobileNavHeader && mobileNavHeader.clientHeight) || 0
              }px`,
            }}
            Index={2}
          >
            <Container Row SpaceBetweenMA PaddingTop="3rem">
              <Container Column>
                <Container Row>
                  <Text H1 B NoWrap={{ Width: '100%' }}>
                    {props.Data.name}
                  </Text>
                </Container>
                <Container Row MarginTop="0.8rem">
                  <Text
                    H3
                    L
                    NoWrap={{ Width: '100%' }}
                    Color="rgb(105,105,105)"
                  >
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
              {device.greaterThan('md') && (
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
                      <Text H5 N>
                        {RatingAggregation(
                          props.Data.delivery_rating,
                          'reviews'
                        )}
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
                      <Text H5 B>
                        {RatingAggregation(props.Data.dining_rating, 'reviews')}
                      </Text>
                      <Text H5 Muted>
                        Dining Reviews
                      </Text>
                    </Container>
                  </Container>
                </Container>
              )}
            </Container>
            <Container Row Height="8rem">
              <TabBar
                Horizontal
                Sections={Sections}
                ActiveSection={props.Section}
                ChangeSection={changeSectionHandler}
              />
            </Container>
          </Container>
          <Container
            Column
            Width="var(--restaurant-page-width)"
            MarginBottom="20rem"
            MarginTop="5rem"
          >
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
              1: (
                <Offers
                  Offers={props.Data.offer_details}
                  Links={props.Data.restaurant_mapped_url}
                />
              ),
              2: (
                <Review
                  Reviews={{
                    dining: RatingArrayCreate(props.Data.dining_rating),
                    delivery: RatingArrayCreate(props.Data.delivery_rating),
                  }}
                />
              ),
              3: <Photos Image={props.Data.images.all} />,
            }[props.Section] || (
              <Offers
                Offers={props.Data.offer_details}
                Links={props.Data.restaurant_mapped_url}
              />
            )}
          </Container>
        </Container>
      </StyledRestaurantPageTemplate>
    );
  } else {
    return null;
  }
}

export default RestaurantPageTemplate;
