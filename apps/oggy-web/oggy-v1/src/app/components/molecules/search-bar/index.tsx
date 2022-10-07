import Image from 'app/components/atoms/image';
import styled from 'styled-components';
import config from 'app/config';
import { Formik } from 'formik';
import Container from 'app/components/atoms/container';
import Input from 'app/components/atoms/input';
import Separator from 'app/components/atoms/separator';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { searchActions } from 'app/store/search/index.slice';
import { AutocompleteAPI } from 'app/service/autocomplete.service';
import { useState } from 'react';
import RestaurantSuggestions from 'app/components/molecules/restaurant-suggestions';
import LocalitySuggestions from '../locality-suggestions';

/* eslint-disable-next-line */
export interface SearchBarProps {
  TypeA?: boolean;
  TypeB?: boolean;
}

const StyledSearchBar = styled.div`
  background-color: white;
  height: 100%;
  width: 100%;
`;

export function SearchBarHero(props: SearchBarProps) {
  const Location = useSelector((state: RootState) => state.search.location);
  const dispatch = useDispatch();

  const changeLocationHandler = (value: any) => {
    dispatch(
      searchActions.changeLocation({
        type: value.loc_type,
        id: value.loc_id,
        name: value.loc_name,
      })
    );
  };
  const [locations, setLocations] = useState<any[]>([]);
  const [restaurants, setRestaurants] = useState<any[]>([]);

  const getSuggestions = (value: string, type: string): void => {
    if (value === '') return;
    if (type === 'locality') {
      AutocompleteAPI.getLocations(value).then((locations) => {
        setLocations(locations.location);
      });
    } else if (type === 'restaurants') {
      AutocompleteAPI.getRestaurants(Location.type, Location.id, value).then(
        (restaurants) => {
          console.log(restaurants);
          setRestaurants(restaurants.data);
        }
      );
    }
  };
  return (
    <Formik
      initialValues={{ locality: Location.name, search: '' }}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <StyledSearchBar>
          {props.TypeA && (
            <Container
              Padding="1rem"
              Border={{ Style: 'Solid', L2: true }}
              Shape="CS0"
            >
              <Container
                Row
                CenterCA
                Gap=".5rem"
                Width="40%"
                Position={{ Type: 'relative' }}
              >
                <Image Image={config.images.LocationIcon} />
                <Input
                  Dropdown={{
                    Modal: {
                      Width: '25rem',
                      Height: '20rem',
                    },
                  }}
                  Key={0}
                  ChangeHandler={(e: any) => {
                    formik.handleChange(e);
                    getSuggestions(e.target.value, 'locality');
                  }}
                  Name="locality"
                  Id="locality"
                  Placeholder={config.content.SearchBarLocationPlaceholder}
                  Value={formik.values.locality}
                >
                  <LocalitySuggestions
                    Data={locations}
                    ChangeHandler={(value) => {
                      changeLocationHandler(value);
                      formik.setFieldValue('locality', value);
                    }}
                  />
                </Input>
              </Container>
              <Container Row Width="5%" Height="2rem" CenterCA CenterMA>
                <Separator Vertical Color="#ffffff" ColorType="light" />
              </Container>
              <Container Row CenterCA Gap=".5rem">
                <Image Image={config.images.SearchIcon} />
                <Input
                  Dropdown={{
                    Modal: {
                      Width: '60rem',
                      Height: '30rem',
                    },
                  }}
                  Key={0}
                  ChangeHandler={(e: any) => {
                    formik.handleChange(e);
                    getSuggestions(e.target.value, 'restaurants');
                  }}
                  Name="search"
                  Id="search"
                  Placeholder={config.content.SearchBarRestaurantPlaceholder}
                  Value={formik.values.search}
                >
                  <RestaurantSuggestions Data={restaurants} />
                </Input>
              </Container>
            </Container>
          )}
          {props.TypeB && (
            <Container Column Gap="2vh" Padding="1rem">
              <Container
                Row
                CenterCA
                Gap=".5rem"
                Width="40%"
                Position={{ Type: 'relative' }}
              >
                <Image Image={config.images.LocationIcon} />
                <Input
                  Dropdown={{
                    Modal: {
                      Width: '25rem',
                      Height: '20rem',
                    },
                  }}
                  Key={0}
                  ChangeHandler={(e: any) => {
                    formik.handleChange(e);
                    getSuggestions(e.target.value, 'locality');
                  }}
                  Name="locality"
                  Id="locality"
                  Placeholder={config.content.SearchBarLocationPlaceholder}
                  Value={formik.values.locality}
                >
                  <LocalitySuggestions
                    Data={locations}
                    ChangeHandler={(value) => {
                      changeLocationHandler(value);
                      formik.setFieldValue('locality', value);
                    }}
                  />
                </Input>
              </Container>
              <Container Row CenterCA BG="#f6f6f6" Padding="1rem">
                <Input
                  Dropdown={{}}
                  Key={0}
                  ChangeHandler={(e: any) => {
                    formik.handleChange(e);
                    getSuggestions(e.target.value, 'restaurants');
                  }}
                  Name="search"
                  Id="search"
                  Placeholder={config.content.SearchBarRestaurantPlaceholder}
                  Value={formik.values.search}
                >
                  <RestaurantSuggestions Data={restaurants} />
                </Input>
              </Container>
            </Container>
          )}
        </StyledSearchBar>
      )}
    </Formik>
  );
}

export default SearchBarHero;
