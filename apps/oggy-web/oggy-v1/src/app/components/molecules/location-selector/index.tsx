import Container from 'app/components/atoms/container';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaLocationArrow, FaCaretDown } from 'react-icons/fa';
import Text from 'app/components/atoms/text';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { RootState } from 'app/store';
import { Capitalize } from 'app/utils';
import { Portal } from '@mui/material';
import Modal from 'app/components/atoms/modal';
import { IoIosArrowDown } from 'react-icons/io';
import { AutocompleteAPI } from 'app/service/autocomplete.service';
import LocalitySuggestions from '../locality-suggestions';
import { searchActions } from 'app/store/search/index.slice';
import { FiSearch } from 'react-icons/fi';
import Input from 'app/components/atoms/input';
/* eslint-disable-next-line */
export interface LocationSelectorProps {
  Condensed?: boolean;
  Normal?: boolean;
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledLocationSelector = styled.div`
  width: 100%;
`;

export function LocationSelector(props: LocationSelectorProps) {
  const [modalState, setModalState] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const dispatch = useDispatch();
  const Location = useSelector((state: RootState) => state.search.location);
  const formik = useFormik({
    initialValues: {
      location: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      if (formik.values.location !== '') {
        AutocompleteAPI.getLocations(formik.values.location).then(
          (suggestions) => {
            setSuggestions(suggestions.location);
          }
        );
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [formik.values.location]);

  const locationHandler = (value: any) => {
    dispatch(
      searchActions.changeLocation({
        type: value.loc_type,
        id: value.loc_id,
        name: value.loc_name,
      })
    );
  };

  return (
    <StyledLocationSelector>
      {props.Condensed && (
        <div onClick={() => setModalState(true)}>
          <Container Row CenterCA Gap="2rem" Width="fit-content">
            <FaLocationArrow color="#ff9800" size="4rem" />
            <Container Column>
              <Text H4 EB>
                {Location.type.toUpperCase()}
              </Text>
              <Text H4 B>
                {Capitalize(Location.name)}
              </Text>
            </Container>
            <FaCaretDown color="grey" />
          </Container>
        </div>
      )}
      {props.Normal && (
        <div onClick={() => setModalState(true)} style={{ width: '100%' }}>
          <Container
            BG="#eeeeee"
            CenterCA
            Padding="1rem"
            Gap="1rem"
            Shape="CS1"
          >
            <FaLocationArrow color="#ff9800" size="2.5rem" />
            <Input
              TextNew={{
                Type: 'A',
                Id: 'location',
                Name: 'location',
                Placeholder: Capitalize(Location.name),
                Value: Capitalize(Location.name),
                ChangeHandler: formik.handleChange,
                Disable: props.Mobile,
              }}
              Key={1}
            />
          </Container>
        </div>
      )}

      {props.Mobile && (
        <Modal
          Close={() => setModalState(false)}
          Open={modalState}
          Animation="GrowFromBottom"
        >
          <Container
            Column
            Height="calc(100 * var(--vh))"
            Width="calc(100 * var(--vw))"
            BG="white"
            Padding="1rem 1rem 1rem 1rem"
            Elevation={{ L1: true }}
            Shape="CS2"
            OverflowHide
          >
            <Container Height="fit-content" EndMA>
              <div
                onClick={() => setModalState(false)}
                style={{ height: 'fit-content' }}
              >
                <IoIosArrowDown size="2rem" />
              </div>
            </Container>
            <Container Column Gap="2rem">
              <Container Row Height="fit-content" CenterCA CenterMA>
                <Text H1 EB Color="Primary">
                  Your location
                </Text>
              </Container>
              <Container
                BG="#eeeeee"
                CenterCA
                Padding="1rem"
                Gap="1rem"
                Shape="CS1"
                Height="5rem"
              >
                <FaLocationArrow color="#ff9800" size="2.5rem" />
                <Input
                  TextNew={{
                    Type: 'A',
                    Id: 'location',
                    Name: 'location',
                    Placeholder: 'Select a location...',
                    Value: formik.values.location,
                    ChangeHandler: formik.handleChange,
                  }}
                  Key={1}
                />
              </Container>
              <Container Column>
                <LocalitySuggestions
                  Data={suggestions}
                  ChangeHandler={(value) => {
                    locationHandler(value);
                    formik.setValues({
                      location: '',
                    });
                    setModalState(false);
                  }}
                />
              </Container>
            </Container>
          </Container>
        </Modal>
      )}
    </StyledLocationSelector>
  );
}

export default LocationSelector;
