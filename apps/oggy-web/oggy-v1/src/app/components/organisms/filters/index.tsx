import styled from 'styled-components';
import { useEffect, useState } from 'react';

import Separator from 'app/components/atoms/separator';
import Button from 'app/components/atoms/button';
import Image from 'app/components/atoms/image';
import CuisinesSection from 'app/components/molecules/cuisines-section';
import MoreFiltersSection from 'app/components/molecules/more-filters-section';
import SortSection from 'app/components/molecules/sort-section';
import TabBar from 'app/components/atoms/tab-bar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { filtersActions } from 'app/store/filter/index.slice';
import { searchActions } from 'app/store/search/index.slice';
import Container from 'app/components/atoms/container';
import { FiltersAPI } from 'app/service/filters.service';
import Images from 'app/constants/images';

/* eslint-disable-next-line */
export interface FiltersProps {}

const StyledFilters = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1.2vw;
  background-color: white;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 140%;
  width: 70rem;
  height: 47rem;
  z-index: 100001;
  border-radius: 0.6rem;
  background-color: white;
  border: 0.1rem solid rgb(232, 232, 232);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.04);
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export function Filters(props: FiltersProps) {
  /*
   * Redux State
   * Filter List
   * Active Filters
   */

  const Filters = useSelector((state: RootState) => state.filters.all);
  const ActiveFilters = useSelector((state: RootState) => state.filters.active);
  const dispatch = useDispatch();
  const [filterList, setFilterList] = useState<any[]>([]);

  useEffect(() => {
    FiltersAPI.getAll().then((filters) => {
      setFilterList(filters);
    });
  }, []);

  //* Click Handler for Filter Button
  const [showFilterList, setShowFilterList] = useState(false);
  const clickFilterHandler = () => {
    setShowFilterList(true);
  };

  //* Switch Handler for Filer Categories
  const [category, setCategory] = useState(Filters.Order[0]);
  const handleChangeCategory = (section: number) => {
    setCategory(Filters.Order[section]);
  };

  const [activeFilters, setActiveFilters] = useState<boolean[][]>(
    new Array<boolean[]>()
  );
  useEffect(() => {
    setActiveFilters(new Array(...ActiveFilters));
  }, [ActiveFilters]);

  const setFilterHandler = (category: number, filter: boolean[]) => {
    activeFilters[category] = filter;
  };

  //* Handler for applying filter to redux state
  const handleCloseFilter = () => {
    dispatch(filtersActions.changeFilter(activeFilters));
    const filterSearch = new Array<{
      type: string;
      command: string;
    }>();
    activeFilters.forEach((filters, i) => {
      filters.forEach((filter, j) => {
        if (filter) {
          filterSearch.push({
            type: Filters.Order[i],
            command: Filters.Category[i][j].command,
          });
        }
      });
    });
    dispatch(searchActions.addFilters(filterSearch));
    setShowFilterList(false);
  };

  return (
    <StyledFilters>
      <Button
        Dropdown
        BackgroundColor={'#f4f4f4'}
        SecondaryBackgroundColor={'#ededed'}
        Color={'rgb(26, 27, 28)'}
        ClickHandler={clickFilterHandler}
      >
        <Container Row CenterCA Gap="1rem">
          <Image Src={Images.Icons.Plus} />
          {showFilterList ? (
            <span>Apply filters</span>
          ) : (
            <span>Add filter</span>
          )}
        </Container>
      </Button>
      {showFilterList && (
        <>
          <Modal onClick={handleCloseFilter} />
          <Wrapper>
            <Container Row>
              <Container Width="40%" Column>
                <TabBar
                  Vertical
                  key={0}
                  Sections={Filters.Order}
                  ActiveSection={Filters.Order.indexOf(category)}
                  ChangeSection={handleChangeCategory}
                />
              </Container>
              <Container Column Padding="3rem 0rem 3rem 3rem">
                {{
                  Sort: (
                    <SortSection
                      Filters={
                        Filters.Category[Filters.Order.indexOf(category)]
                      }
                      Active={activeFilters[Filters.Order.indexOf(category)]}
                      FilterHandler={setFilterHandler}
                    />
                  ),
                  Cuisines: (
                    <CuisinesSection
                      Filters={
                        Filters.Category[Filters.Order.indexOf(category)]
                      }
                      Active={activeFilters[Filters.Order.indexOf(category)]}
                      FilterHandler={setFilterHandler}
                    />
                  ),
                  'More filters': (
                    <MoreFiltersSection
                      Filters={
                        Filters.Category[Filters.Order.indexOf(category)]
                      }
                      Active={activeFilters[Filters.Order.indexOf(category)]}
                      FilterHandler={setFilterHandler}
                    />
                  ),
                }[category] || (
                  <SortSection
                    Filters={Filters.Category[Filters.Order.indexOf(category)]}
                    Active={activeFilters[Filters.Order.indexOf(category)]}
                    FilterHandler={setFilterHandler}
                  />
                )}
              </Container>
            </Container>
          </Wrapper>
        </>
      )}
      <Separator Vertical Color="#f7f7f7" ColorType="light" />
    </StyledFilters>
  );
}

export default Filters;
