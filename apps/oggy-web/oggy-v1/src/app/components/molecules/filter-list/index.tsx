import { useState } from 'react';
import styled from 'styled-components';
import CuisinesSection from '../cuisines-section';
import MoreFiltersSection from '../more-filters-section';
import SortSection from '../sort-section';
import TabBar from 'app/components/atoms/tab-bar';

/* eslint-disable-next-line */
export interface FilterListProps {
  Filters: Array<{
    Name: string;
    List: {
      command: string;
      text: string;
    }[];
    Type: string;
  }>;
  ActiveFilters: Array<object>;
  ApplyFilterHandler: (filter: Map<string, object>) => void;
}

const StyledFilterList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  border: 2px solid rgba(0, 0, 0, 0.05);
  box-shadow: -2px 3px 10px 1px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Right = styled.div`
  padding: 4rem 4rem;
  width: 100%;
  background-color: #ffffff;
`;

const populateSection = (
  section: string,
  filters: Array<{
    command: string;
    text: string;
  }>,
  activeFilters: Map<string, number[]>,
  setFilterHandler: (section: number, filters: number[]) => void
) => {
  const start = [0];
  switch (section) {
    case 'Sort':
      return (
        <SortSection
          Filters={filters}
          Active={
            activeFilters.has(section) ? activeFilters.get(section) : start
          }
          FilterHandler={setFilterHandler}
        />
      );
    case 'Cuisines':
      return <CuisinesSection />;
    case 'More filters':
      return <MoreFiltersSection />;
    default:
      return null;
  }
};

const Left = styled.div`
  min-width: 30%;
`;

export function FilterList(props: FilterListProps) {
  const [section, setSection] = useState(0);
  const activeFilters = new Map<string, number[]>();
  const setFilterHandler = (section: number, filters: number[]) => {
   console.log(filters);
    activeFilters.set(props.Filters[section].Name, filters);
  };
  return (
    <StyledFilterList>
      <Left>
        <TabBar
          key={0}
          Sections={['Sort', 'Cuisines', 'More Filters']}
          ActiveSection={section}
          ChangeSection={(section: number) => setSection(section)}
        />
      </Left>
      <Right>
        {populateSection(
          props.Filters[section].Name,
          props.Filters[section].List,
          activeFilters,
          setFilterHandler
        )}
      </Right>
    </StyledFilterList>
  );
}

export default FilterList;
