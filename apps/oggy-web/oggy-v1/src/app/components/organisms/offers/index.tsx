import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { GetVendorColor } from 'app/utils';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OffersProps {
  Offers: any;
}

const StyledOffers = styled.div``;

const StyledOfferCard = styled.div`
  width: 100%;
`;

const OfferCard = (
  code: string | null,
  title: string | null,
  subtitle: string | null
) => {
  return (
    <StyledOfferCard>
      <Container Column SpaceBetweenMA Padding="2rem" Gap="3rem">
        <Container Row>
          <Text H2 EB Color="white">
            {code}
          </Text>
        </Container>
        <Container Column Gap="1rem">
          <Text H4 B Color="white">
            {title}
          </Text>
          <Text H4 N Color="white">
            {subtitle}
          </Text>
        </Container>
      </Container>
    </StyledOfferCard>
  );
};

export function Offers(props: OffersProps) {
  let i = 0;
  return (
    <StyledOffers>
      {['zomato', 'dineout', 'eazydiner', 'swiggy'].map((vendor) => {
        const offers = props.Offers[`${vendor}_offer`];
        if (offers && offers.length > 0) {
          return (
            <Container Row MarginBottom="7vh" CenterCA Height="30rem">
              <Container Row Gap="5rem" ScrollX ScrollStyle="Hide">
                {offers.map((offer: any) => {
                  return (
                    <Container
                      Width="30rem"
                      MinWidth="30rem"
                      MarginRight="2rem"
                      EndCA
                      SpaceBetweenMA
                      Column
                      Padding="1rem"
                      // Border={{ Elegant: true, Level: 3 }}
                      BG={GetVendorColor(vendor)}
                    >
                      {OfferCard(offer.code, offer.title, offer.subtitle)}
                      <Text H3 EB Color="white">
                        {vendor}
                      </Text>
                    </Container>
                  );
                })}
              </Container>
            </Container>
          );
        } else {
          i++;
          return null;
        }
      })}
      {i === 4 && (
        <Container Column CenterCA CenterMA Width="100%">
          <Text H1 EB Color="LightGrey">
            No offers available
          </Text>
        </Container>
      )}
    </StyledOffers>
  );
}

export default Offers;
