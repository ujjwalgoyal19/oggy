import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { useState } from 'react';
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
  const [showMore, setShowMore] = useState(false);
  return (
    <StyledOverview>
      <Container Row MarginTop="3rem">
        <Container Width="70%" Column Gap="4rem">
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
        <Container Width="30%" Column>
          Goyal
        </Container>
      </Container>
    </StyledOverview>
  );
}

export default Overview;
