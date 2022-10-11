import Container from 'app/components/atoms/container';
import Input from 'app/components/atoms/input';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
// import { GrFormClose } from 'react-icons/gr';
// import { AiOutlineCloseCircle, AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io';
import Modal from 'app/components/atoms/modal';
import { useEffect, useState } from 'react';
import Text from 'app/components/atoms/text';
import { AutocompleteAPI } from 'app/service/autocomplete.service';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import RestaurantSuggestions from '../restaurant-suggestions';

/* eslint-disable-next-line */
export interface SearchRestaurantsProps {
  Mobile?: boolean;
  Desktop?: boolean;
}

const StyledSearchRestaurants = styled.div`
  width: 100%;
  height: 100%;
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

  return (
    <StyledSearchRestaurants>
      <Container Column CenterCA>
        <div onClick={() => setModalState(true)} style={{ width: '100%' }}>
          <Container
            BG="#eeeeee"
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
              <Container ScrollY>
                <RestaurantSuggestions Data={suggestions} />
              </Container>
            </Container>
          </Container>
        </Modal>
      )}
      {props.Desktop && <Container></Container>}
    </StyledSearchRestaurants>
  );
}

export default SearchRestaurants;
