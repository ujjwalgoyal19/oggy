import AboutUsTemplate from 'app/components/templates/about-us-template';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AboutUsPageProps {}

const StyledAboutUsPage = styled.div``;

export function AboutUsPage(props: AboutUsPageProps) {
  return (
    <StyledAboutUsPage>
      <AboutUsTemplate />
    </StyledAboutUsPage>
  );
}

export default AboutUsPage;
