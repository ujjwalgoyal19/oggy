import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LocationPinProps {}

const StyledLocationPin = styled.div`
  color: pink;
`;

export function LocationPin(props: LocationPinProps) {
  return (
    <StyledLocationPin>
      <h1>Welcome to LocationPin!</h1>
    </StyledLocationPin>
  );
}

export default LocationPin;
