import Container from 'app/components/atoms/container';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaLocationArrow, FaCaretDown } from 'react-icons/fa';
import Text from 'app/components/atoms/text';
/* eslint-disable-next-line */
export interface LocationSelectorProps {
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledLocationSelector = styled.div``;

export function LocationSelector(props: LocationSelectorProps) {
  const dispatch = useDispatch();
  return (
    <StyledLocationSelector>
      <Container Row CenterCA Gap="1rem">
        <FaLocationArrow color="#ff9800" size="6vw" />
        <Text H4>React</Text>
        <FaCaretDown color="grey" />
      </Container>
    </StyledLocationSelector>
  );
}

export default LocationSelector;
