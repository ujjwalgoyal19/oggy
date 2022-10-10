import Container from 'app/components/atoms/container';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaLocationArrow, FaCaretDown } from 'react-icons/fa';
import Text from 'app/components/atoms/text';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { RootState } from 'app/store';
import { Capitalize } from 'app/utils';
/* eslint-disable-next-line */
export interface LocationSelectorProps {
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledLocationSelector = styled.div``;

export function LocationSelector(props: LocationSelectorProps) {
  const dispatch = useDispatch();
  const Location = useSelector((state: RootState) => state.search.location);
  const formik = useFormik({
    initialValues: {
      type: Location.type,
      location: Location.name,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledLocationSelector>
      <Container Row CenterCA Gap="1rem">
        <FaLocationArrow color="#ff9800" size="3rem" />
        <Container Column>
          <Text H4 EB>
            {formik.values.type.toUpperCase()}
          </Text>
          <Text H4 B>
            {Capitalize(formik.values.location)}
          </Text>
        </Container>
        <FaCaretDown color="grey" />
      </Container>
      <Container Column></Container>
    </StyledLocationSelector>
  );
}

export default LocationSelector;
