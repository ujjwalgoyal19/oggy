import Container from 'app/components/atoms/container';
import Input from 'app/components/atoms/input';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';
import Modal from 'app/components/atoms/modal';
import { useEffect, useState } from 'react';
import Text from 'app/components/atoms/text';
import { AutocompleteAPI } from 'app/service/autocomplete.service';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import RestaurantSuggestions from '../restaurant-suggestions';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface SearchRestaurantsProps {
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledSearchRestaurants = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export function SearchRestaurants(props: SearchRestaurantsProps) {
  const [modalState, setModalState] = useState(false);
  const Location = useSelector((state: RootState) => state.search.location);
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [suggestions, setSuggestions] = useState<any[]>([]);
  const device = useDeviceType();

  const getSuggestions = (value: string) => {
    AutocompleteAPI.getRestaurants(Location.type, Location.id, value).then(
      (restaurants) => {
        setSuggestions(restaurants.data);
      }
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions(formik.values.search);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [formik.values.search]);

  const CloseHandler = () => {
    setModalState(false);
    formik.setValues({ search: '' });
  };

  return (
    <StyledSearchRestaurants>
      <Container Column CenterCA>
        <div onClick={() => setModalState(true)} style={{ width: '100%' }}>
          <Container
            BG={(props.Mobile && '#eeeeee') || 'transparent'}
            CenterCA
            Padding="1rem"
            Gap="1rem"
            Shape="CS1"
          >
            <FiSearch color="#ff9800" size={'2.5rem'} />
            <Input
              TextNew={{
                Type: 'A',
                Id: 'search',
                Name: 'search',
                Placeholder: 'Restaurant name or a dish',
                Value: formik.values.search,
                ChangeHandler: formik.handleChange,
                Disable: props.Mobile,
              }}
              Key={1}
            />
          </Container>
        </div>
      </Container>
      {props.Mobile && (
        <Modal
          Open={modalState}
          Animation="GrowFromBottom"
          Close={() => setModalState(false)}
        >
          <Container
            Column
            Height="calc(100 * var(--vh))"
            Width="calc(100 * var(--vw))"
            BG="white"
            Padding="1rem 1rem 1rem 1rem"
            Elevation={{ L1: true }}
            Shape="CS2"
          >
            <Container
              ClickHandler={() => setModalState(false)}
              Height="fit-content"
              EndMA
            >
              <IoIosArrowDown size="2rem" />
            </Container>

            <Container Column Gap="2rem">
              <Container
                Row
                SpaceBetweenMA
                Height="fit-content"
                CenterCA
                CenterMA
              >
                <Text H1 EB Color="Primary">
                  Search restaurants
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
                <FiSearch color="#ff9800" size={'2.5rem'} />
                <Input
                  TextNew={{
                    Type: 'A',
                    Id: 'search',
                    Name: 'search',
                    Placeholder: 'Start your search...',
                    Value: formik.values.search,
                    ChangeHandler: formik.handleChange,
                  }}
                  Key={1}
                />
              </Container>
              <Container
                ScrollY
                ScrollStyle="Hide"
                Height={device.getHeight(80)}
              >
                <RestaurantSuggestions Data={suggestions} />
              </Container>
            </Container>
          </Container>
        </Modal>
      )}
      {props.Desktop && formik.values.search.length > 0 && (
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
            Width="45rem"
            MaxHeight="calc(30 * var(--vh))"
            Height="fit-content"
            BG="white"
            Elevation={{ L1: true }}
            Border={{ Style: 'Solid', L1: true }}
            ScrollY
            ScrollStyle="Hide"
            Position={{ Type: 'absolute', Top: '120%' }}
            Index={3}
            ClickHandler={CloseHandler}
          >
            <RestaurantSuggestions Data={suggestions} />
          </Container>
        </>
      )}
    </StyledSearchRestaurants>
  );
}

export default SearchRestaurants;
