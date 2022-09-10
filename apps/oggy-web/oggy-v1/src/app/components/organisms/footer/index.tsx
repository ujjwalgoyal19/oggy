import styled from 'styled-components';
import config from 'app/config';
import Image from 'app/components/atoms/image';
import Heading from 'app/components/atoms/heading';
import Section from 'app/components/atoms/section';

/* eslint-disable-next-line */
export interface FooterProps {}

const StyledFooter = styled.div`
  min-height: 20vh;
  padding: 5vh 0vw 1vh 0vw;
  background-color: #f8f8f8;
`;

interface IRow {
  MarginBottom?: string;
}

const Row = styled.div<IRow>`
  margin-bottom: ${(props) => props.MarginBottom};
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
  li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }
`;

const VerticalList = styled(List)`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;
const HorizontalList = styled(List)`
  display: flex;
  flex-direction: row;
  gap: 2vw;
`;

const ItemList = styled.li``;

const Link = styled.a`
  text-decoration: none;
  font-size: 1vw;
  color: rgba(29, 29, 27, 0.8);
`;
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter>
      <Section Width="70%">
        <Row MarginBottom="4vh">
          <Column>
            <Image Image={config.images.Oggy.Logo} />
          </Column>
          <Column>
            <VerticalList>
              <ItemList>
                <HorizontalList>
                  <ItemList>
                    <a href="https://github.com/">
                      <Image Image={config.images.Home.Badge.Apple} />
                    </a>
                  </ItemList>
                  <ItemList>
                    <a href="https://github.com/">
                      <Image Image={config.images.Home.Badge.Android} />
                    </a>
                  </ItemList>
                </HorizontalList>
              </ItemList>
            </VerticalList>
          </Column>
        </Row>
        <Row MarginBottom="4vh">
          <Column>
            <Heading
              HeadingColor="rgba(29, 29, 27, 1)"
              HeadingSize="1.2vw"
              HeadingWeight="500"
            >
              ABOUT OGGY
            </Heading>
            <VerticalList>
              <ItemList>
                <Link href="https://github.com/">Who We Are</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Blog</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Work With Us</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Contact Us</Link>
              </ItemList>
            </VerticalList>
          </Column>
          <Column>
            <Heading
              HeadingColor="rgba(29, 29, 27, 1)"
              HeadingSize="1.2vw"
              HeadingWeight="500"
            >
              LEARN MORE
            </Heading>
            <VerticalList>
              <ItemList>
                <Link href="https://github.com/">Privacy</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Security</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Terms</Link>
              </ItemList>
            </VerticalList>
          </Column>
          <Column>
            <Heading
              HeadingColor="rgba(29, 29, 27, 1)"
              HeadingSize="1.2vw"
              HeadingWeight="500"
            >
              SOCIALS
            </Heading>
            <VerticalList>
              <ItemList>
                <Link href="https://github.com/">Instagram</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Facebook</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Linkedin</Link>
              </ItemList>
              <ItemList>
                <Link href="https://github.com/">Twitter</Link>
              </ItemList>
            </VerticalList>
          </Column>
        </Row>
        <Row>
          <Separator />
        </Row>
        <Row>
          <HorizontalList>
            <ItemList>
              <p>
                By continuing past this page, you agree to our Terms of Service,
                Cookie Policy, Privacy Policy and Content Policies. All
                trademarks are properties of their respective owners. 2021-2022
                © Oggy™ Ltd. All rights reserved.
              </p>
            </ItemList>
          </HorizontalList>
        </Row>
      </Section>
    </StyledFooter>
  );
}

export default Footer;
