import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AboutUsTemplateProps {}

const StyledAboutUsTemplate = styled.div``;

const content = [
  {
    heading: 'Search',
    content:
      'Your willing can begin with search for areas , cuisines and restaurants. Either the dine or ordering online you can look for best of discounts.',
    image: 'assets/images/Search.gif',
    height: '40rem',
  },
  {
    heading: 'Find',
    content:
      'Get amazing deals and offers on all best options at single platform. Find restaurants at your comfortable places.',
    image: 'assets/images/Find.gif',
    height: '40rem',
  },
  {
    heading: 'Compare',
    content:
      'Make a differentiation on best deals of all sites,  ratings on all your favorite restaurant. Get the best option by sorting them with filters.',
    image: 'assets/images/Compare.gif',
    height: '20rem',
  },
];

export function AboutUsTemplate(props: AboutUsTemplateProps) {
  const device = useDeviceType();
  return (
    <StyledAboutUsTemplate>
      <Container Row CenterMA>
        <Container Column Width="var(--about-us-page-width)" Gap="10rem">
          {content.map((value, index) => {
            return (
              <Container
                Row={device.greaterThan('md')}
                Column={device.lessThan('md')}
                Height="calc(70 * var(--vh))"
                Gap="10rem"
              >
                {device.greaterThan('md') && index % 2 !== 0 && (
                  <Container>
                    <Container Column OverflowHide CenterMA MaxWidth="400px">
                      <Image Fit Src={value.image} />
                    </Container>
                  </Container>
                )}
                <Container Column Gap="5rem" CenterMA>
                  <Text D2 EB>
                    {value.heading}
                  </Text>
                  <Text H3 N>
                    {value.content}
                  </Text>
                </Container>
                {(device.lessThan('md') || index % 2 === 0) && (
                  <Container>
                    <Container Column OverflowHide CenterMA MaxWidth="400px">
                      <Image Fit Src={value.image} />
                    </Container>
                  </Container>
                )}
              </Container>
            );
          })}
          <Container
            Column
            CenterCA
            Height="fit-content"
            Gap="8rem"
            MarginTop="calc(15 * var(--vh))"
            MarginBottom="calc(25 * var(--vh))"
          >
            <Text D2 EB>
              About us
            </Text>
            <Text H2>
              <Text Color="var(--primary-color)" B>
                Diaz Cartel Private Limited&nbsp;
              </Text>
              <Text>was established on 11 March 2021 by&nbsp;</Text>
              <Text Color="var(--primary-color)" B>
                Mr. Arnav Sharma&nbsp;
              </Text>
              <Text>and&nbsp;</Text>
              <Text Color="var(--primary-color)" B>
                Mr. Samarth Gupta
              </Text>
              <Text>
                . The motive to initiate this company is to make Online shopping
                stress-free and more reliable.
              </Text>
            </Text>
            <Text H2>
              Oggy is the application that compares discounts on food orders
              from various food discount providers. Oggy is a single-click
              platform that surfs the majority of discount providers in the
              background and provides all discounts on a single page
            </Text>
          </Container>
          <Container Row></Container>
        </Container>
      </Container>
    </StyledAboutUsTemplate>
  );
}

export default AboutUsTemplate;
