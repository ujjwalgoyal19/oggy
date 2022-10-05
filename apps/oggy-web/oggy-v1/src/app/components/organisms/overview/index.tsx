import Button from 'app/components/atoms/button';
import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import Map from 'app/components/molecules/map';
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
  console.log(props.Data.about.features);
  return (
    <StyledOverview>
      <Container Row MarginTop="3rem">
        <Container Width="60%" Column Gap="4rem">
          <Text H2 N>
            About this place
          </Text>
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
          {props.TopDishes && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Top Dishes from the restaurant
              </Text>
              <Container Width="90%" Row Wrap Gap="1.5rem">
                {props.TopDishes.map((dish: string) => {
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
          {props.CFT && (
            <Container Column Gap="2rem">
              <Text H3 N>
                Average Cost
              </Text>
              <Text>{`₹${props.CFT} for two people (approx.)`}</Text>
            </Container>
          )}
        </Container>
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
      </Container>
    </StyledOverview>
  );
}

export default Overview;
