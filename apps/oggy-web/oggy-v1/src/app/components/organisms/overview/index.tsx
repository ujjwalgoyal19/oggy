import Button from 'app/components/atoms/button';
import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import Map from 'app/components/molecules/map';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OverviewProps {
  Data: any;
}

const StyledOverview = styled.div``;

const FeatureCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  border: 2px solid rgb(208, 208, 208);
`;

export function Overview(props: OverviewProps) {
  return (
    <StyledOverview>
      <Container Row MarginTop="3rem">
        <Container Width="60%" Column Gap="4rem">
          <Text H2 N>
            About this place
          </Text>
          <Container Column Gap="2rem">
            <Text H3 N>
              Features
            </Text>
            <Container Width="90%" Row Wrap Gap="1.5rem">
              {props.Data.about.features.map((feature: string) => {
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
          <Container Column Gap="2rem">
            <Text H3 N>
              What people say about this place
            </Text>
            <Container Width="90%" Row Wrap Gap="1.5rem">
              {props.Data.about.people_liked.map((feature: string) => {
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
          <Container Column Gap="2rem">
            <Text H3 N>
              Top Tags
            </Text>
            <Container Width="90%" Row Wrap Gap="1.5rem">
              {props.Data.about.top_tags.map((feature: string) => {
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
          <Container Column Gap="2rem">
            <Text H3 N>
              Cuisines
            </Text>
            <Container Width="90%" Row Wrap Gap="1.5rem">
              {props.Data.cuisines.map((cuisine: any) => {
                return (
                  <FeatureCard>
                    <Text H4 L>
                      {cuisine.cuisine_name}
                    </Text>
                  </FeatureCard>
                );
              })}
            </Container>
          </Container>
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
