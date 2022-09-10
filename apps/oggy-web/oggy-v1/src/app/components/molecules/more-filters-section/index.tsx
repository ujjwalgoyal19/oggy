import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MoreFiltersSectionProps {}

const StyledMoreFiltersSection = styled.div`
  color: pink;
`;

export function MoreFiltersSection(props: MoreFiltersSectionProps) {
  return (
    <StyledMoreFiltersSection>
      <h1>Welcome to MoreFiltersSection!</h1>
    </StyledMoreFiltersSection>
  );
}

export default MoreFiltersSection;
