import Container from 'app/components/atoms/container';
import Text from 'app/components/atoms/text';
import { GetVendorColor } from 'app/utils';
import { IoIosShareAlt } from 'react-icons/io';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OffersProps {
  Offers: any;
  Links?: any;
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
      <Container Column SpaceBetweenMA Padding="1rem" Gap="2rem">
        <Container Row>
          <Text H3 EB Color="white">
            {code}
          </Text>
        </Container>
        <Container Column Gap="1rem">
          <Text H5 EB Color="white">
            {title}
          </Text>
          <Text H5 N Color="white">
            {subtitle}
          </Text>
        </Container>
      </Container>
    </StyledOfferCard>
  );
};

export function Offers(props: OffersProps) {
  let i = 0;
  const Vendors = [
    'https://www.zomato.com',
    'https://dineout.co.in/',
    '',
    'https://www.swiggy.com',
  ];
  return (
    <StyledOffers>
      {['zomato', 'dineout', 'eazydiner', 'swiggy'].map((vendor, index) => {
        const offers = props.Offers[`${vendor}_offer`];
        if (offers && offers.length > 0) {
          return (
            <a href={Vendors[index] + props.Links[`${vendor.at(0)}_url`]}>
              <Container Row MarginBottom="3rem" CenterCA>
                <Container
                  Row
                  Gap="3rem"
                  ScrollX
                  ScrollStyle="Hide"
                  PaddingBottom="30px"
                >
                  {offers.map((offer: any) => {
                    return (
                      <Container
                        Width="30rem"
                        MinWidth="min(30rem, 90%)"
                        MarginRight="2rem"
                        Column
                        Gap="1.5rem"
                        Shape="CS1"
                        BG={GetVendorColor(vendor)}
                        ClassName="shine"
                        Border={{
                          Style: 'Solid',
                          L2: true,
                          Color: GetVendorColor(vendor),
                        }}
                        Height="20rem"
                        Position={{ Type: 'relative' }}
                      >
                        <Container
                          BG="white"
                          Height="fit-content"
                          Padding="1rem"
                        >
                          <Text H4 EB Color={GetVendorColor(vendor)}>
                            {vendor}
                          </Text>
                        </Container>
                        {OfferCard(offer.code, offer.title, offer.subtitle)}

                        <Container
                          Shape="Circle"
                          BG="White"
                          Width="4rem"
                          Height="4rem"
                          Position={{
                            Type: 'absolute',
                            Bottom: '5%',
                            Right: '5%',
                          }}
                          CenterCA
                          CenterMA
                        >
                          <IoIosShareAlt color={GetVendorColor(vendor)} />
                        </Container>
                      </Container>
                    );
                  })}
                </Container>
              </Container>
            </a>
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
