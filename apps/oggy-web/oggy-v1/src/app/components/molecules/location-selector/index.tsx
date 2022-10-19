import Container from 'app/components/atoms/container';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaLocationArrow, FaCaretDown } from 'react-icons/fa';
import Text from 'app/components/atoms/text';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { RootState } from 'app/store';
import { Capitalize } from 'app/utils';
import Modal from 'app/components/atoms/modal';
import { IoIosArrowDown } from 'react-icons/io';
import { AutocompleteAPI } from 'app/service/autocomplete.service';
import LocalitySuggestions from '../locality-suggestions';
import { searchActions } from 'app/store/search/index.slice';
import Input from 'app/components/atoms/input';
import { LocalityAPI } from 'app/service/locality.service';
/* eslint-disable-next-line */
export interface LocationSelectorProps {
  Condensed?: boolean;
  Normal?: boolean;
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledLocationSelector = styled.div`
  width: 100%;
  position: relative;
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
    AutocompleteAPI.getLocations('').then((sug) => {
      console.log(sug);
      setSuggestions(sug.location);
    });
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      AutocompleteAPI.getLocations(formik.values.location).then((sug) => {
        console.log(sug);
        setSuggestions(sug.location);
      });
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [formik.values.location]);

  const ChangeLocationHandler = (value: any) => {
    dispatch(
      searchActions.changeLocation({
        type: value.loc_type,
        id: value.loc_id,
        name: value.loc_name,
      })
    );
    formik.setValues({ location: '' });
    setModalState(false);
  };

  const CloseHandler = () => {
    setModalState(false);
    formik.setValues({ location: '' });
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
            BG={(props.Mobile && '#eeeeee') || 'transparent'}
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
                Value: formik.values.location,
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
          Close={CloseHandler}
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
              <div onClick={CloseHandler} style={{ height: 'fit-content' }}>
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
                MinHeight="5rem"
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
              <LocalitySuggestions
                Data={suggestions}
                ChangeHandler={ChangeLocationHandler}
              />
            </Container>
          </Container>
        </Modal>
      )}

      {props.Desktop && modalState && (
        <>
          <Container
            Position={{
              Type: 'fixed',
              Top: '0',
              Bottom: '0',
              Right: '0',
              Left: '0',
            }}
            ClickHandler={CloseHandler}
            Index={2}
          />
          <Container
            Column
            Width="20rem"
            Height="20vh"
            // Height="fit-content"
            BG="white"
            Elevation={{ L1: true }}
            Border={{ Style: 'Solid', L1: true }}
            ScrollY
            ScrollStyle="Hide"
            Position={{ Type: 'absolute', Top: '120%' }}
            Index={3}
          >
            <LocalitySuggestions
              Data={suggestions}
              ChangeHandler={ChangeLocationHandler}
            />
          </Container>
        </>
      )}
    </StyledLocationSelector>
  );
}

export default LocationSelector;
