import Button from 'app/components/atoms/button';
import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import Map from 'app/components/molecules/map';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OverviewProps {
  Data: any;
  Features?: string[];
  PeopleLiked?: string[];
  TopTags?: string[];
  TopDishes?: string[];
  CFT?: string;
}

const StyledOverview = styled.div``;

const FeatureCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid rgb(208, 208, 208);
`;

export function Overview(props: OverviewProps) {
  const device = useDeviceType();
  const dishes = new Array<string>();
  if (props.TopDishes) {
    props.TopDishes.forEach((dish: string) => {
      if (dish !== '') {
        dishes.push(dish);
      }
    });
  }
  // console.log('Hello');

  return (
    <StyledOverview>
      <Container Row>
        <Container
          Width={(device.greaterThan('md') && '60%') || '100%'}
          Column
          Gap="4rem"
        >
          {!props.Features &&
            !props.PeopleLiked &&
            !props.TopTags &&
            !props.TopDishes &&
            !props.CFT &&
            ((
              <Container>
                <Text H2 N>
                  Nothing to show here please check out offers
                </Text>
              </Container>
            ) || (
              <Text H2 N>
                About this place
              </Text>
            ))}
          {props.CFT && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Average Cost
              </Text>
              <Text>{`₹${props.CFT} for two people (approx.)`}</Text>
            </Container>
          )}
          {props.Features && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Features
              </Text>
              <Container Width="90%" Row Wrap Gap="1.5rem">
                {props.Features.map((feature: string) => {
                  return (
                    <FeatureCard>
                      <Text H4 L>
                        {feature}
                      </Text>
                    </FeatureCard>
                  );
                })}
              </Container>
            </Container>
          )}
          {props.PeopleLiked && (
            <Container Column Gap="2rem">
              <Text H3 N>
                What people say about this place
              </Text>
              <Container Width="90%" Row Wrap Gap="1.5rem">
                {props.PeopleLiked.map((feature: string) => {
                  return (
                    <FeatureCard>
                      <Text H4 L>
                        {feature}
                      </Text>
                    </FeatureCard>
                  );
                })}
              </Container>
            </Container>
          )}
          {props.TopTags && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Top Tags
              </Text>
              <Container Width="90%" Row Wrap Gap="1.5rem">
                {props.TopTags.map((feature: string) => {
                  return (
                    <FeatureCard>
                      <Text H4 L>
                        {feature}
                      </Text>
                    </FeatureCard>
                  );
                })}
              </Container>
            </Container>
          )}
          {dishes.length > 0 && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Top Dishes from the restaurant
              </Text>
              <Container Width="90%" Row Wrap Gap="1.5rem">
                {dishes.map((dish: string) => {
                  return (
                    <FeatureCard>
                      <Text H4 L>
                        {dish}
                      </Text>
                    </FeatureCard>
                  );
                })}
              </Container>
            </Container>
          )}
          {device.lessThan('md') && (
            <Container
              Width="100%"
              Column
              Gap="3rem"
              Padding="3rem"
              Elevation={{ L1: true }}
              Border={{ Style: 'Solid', L1: true }}
              Shape="CS1"
            >
              <Container
                style={{ overflow: 'hidden', zIndex: '0' }}
                Height="18vh"
                Width="100%"
              >
                <Map
                  Location={[
                    parseFloat(props.Data.location.latitude),
                    parseFloat(props.Data.location.longitude),
                  ]}
                  ZoomLevel={15}
                  Text={props.Data.name}
                />
              </Container>
              <Container Column Gap="2rem">
                <Text H4 N>
                  {props.Data.location.address}
                </Text>
                <Container EndMA CenterCA>
                  <Container>
                    <Text H4 Color="Primary">
                      <span
                        onClick={() => {
                          navigator.clipboard.writeText(
                            props.Data.contact_details[0]
                          );
                        }}
                      >
                        {props.Data.contact_details[0]}
                      </span>
                    </Text>
                  </Container>

                  <Button Primary>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${props.Data.location.latitude},${props.Data.location.longitude}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Directions
                    </a>
                  </Button>
                </Container>
              </Container>
            </Container>
          )}
        </Container>
        {device.greaterThan('md') && (
          <Container Width="40%" Column Gap="3rem" Padding="3rem">
            <Container Column Gap="2rem">
              <Text H2 N>
                Call
              </Text>
              <Container Column Gap="1rem" style={{ cursor: 'pointer' }}>
                {props.Data.contact_details.map((contact: string) => {
                  return (
                    <Text H3 Color="Primary">
                      <span
                        onClick={() => {
                          navigator.clipboard.writeText(contact);
                        }}
                      >
                        {contact}
                      </span>
                    </Text>
                  );
                })}
              </Container>
            </Container>
            <Container
              style={{ overflow: 'hidden', zIndex: '0' }}
              Height="25vh"
              Width="100%"
            >
              <Map
                Location={[
                  parseFloat(props.Data.location.latitude),
                  parseFloat(props.Data.location.longitude),
                ]}
                ZoomLevel={15}
                Text={props.Data.name}
              />
            </Container>
            <Container Column Gap="2rem">
              <Text H4>{props.Data.location.address}</Text>
              <Button Primary>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${props.Data.location.latitude},${props.Data.location.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Directions
                </a>
              </Button>
            </Container>
          </Container>
        )}
      </Container>
    </StyledOverview>
  );
}

export default Overview;
