import Section from 'app/components/atoms/section';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RestaurantPageTemplateProps {
  Data: any;
}

const StyledRestaurantPageTemplate = styled.div`
  min-height: 100vh;
`;

export function RestaurantPageTemplate(props: RestaurantPageTemplateProps) {
  return (
    <StyledRestaurantPageTemplate>
      <Section Width="70%">{props.Data?.id}</Section>
      <Section Width="70%">hello</Section>
      <Section Width="70%">hello</Section>
      <Section Width="70%">hello</Section>
    </StyledRestaurantPageTemplate>
  );
}

export default RestaurantPageTemplate;
