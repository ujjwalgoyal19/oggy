import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OffersProps {
  Offers: any;
}

const StyledOffers = styled.div``;

const StyledOfferCard = styled.div`
  width: 40rem;
  height: 17rem;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.05);
  border: 1px solid;
  border-color: rgb(232, 232, 232);
  border-radius: 10px;
  overflow: hidden;
`;

const OfferCard = (
  code: string | null,
  title: string | null,
  subtitle: string | null
) => {
  return (
    <StyledOfferCard>
      <Container Column SpaceBetweenMA Padding="2rem">
        <Container Column SpaceBetweenMA Height="fit-content" Gap="1rem">
          <Text H2 N>
            {title}
          </Text>
          <Text H4>{subtitle}</Text>
        </Container>
        <Container Row Height="fit-content">
          <Text H4 N>
            {code}
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
            <Container
              Row
              MarginTop="5rem"
              CenterCA
              Position={{ Type: 'relative' }}
              ScrollX
              ScrollStyle="Hide"
            >
              <Container Width="fit-content" MarginRight="3rem">
                <Text D5 EB Vertical Color="rgb(228,228,228)">
                  {vendor}
                </Text>
              </Container>
              <Container Row Gap="5rem">
                {offers.map((offer: any) => {
                  return OfferCard(offer.code, offer.title, offer.subtitle);
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
          <Text D6>No offers available</Text>
        </Container>
      )}
    </StyledOffers>
  );
}

export default Offers;
