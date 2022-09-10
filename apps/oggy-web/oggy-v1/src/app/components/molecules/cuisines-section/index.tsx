import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CuisinesSectionProps {}

const StyledCuisinesSection = styled.div`
  color: pink;
`;

export function CuisinesSection(props: CuisinesSectionProps) {
  return (
    <StyledCuisinesSection>
      <h1>Welcome to CuisinesSection!</h1>
    </StyledCuisinesSection>
  );
}

export default CuisinesSection;
