import Container from 'app/components/atoms/container';
import Input from 'app/components/atoms/input';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { GrFormClose } from 'react-icons/gr';
import Modal from 'app/components/atoms/modal';
import { useState } from 'react';
import Text from 'app/components/atoms/text';

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
  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
                Disable: true,
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
            Padding="1rem"
            Gap="1rem"
            style={{
              borderTopRightRadius: '2rem',
              borderTopLeftRadius: '2rem',
              overflow: 'hidden',
            }}
          >
            <Container Row SpaceBetweenMA Height="fit-content" CenterCA>
              <Text H3 B>
                Search restaurants or dishes
              </Text>
              <div onClick={() => setModalState(false)}>
                <GrFormClose size="8vw" />
              </div>
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
          </Container>
        </Modal>
      )}
      {props.Desktop && <Container></Container>}
    </StyledSearchRestaurants>
  );
}

export default SearchRestaurants;
