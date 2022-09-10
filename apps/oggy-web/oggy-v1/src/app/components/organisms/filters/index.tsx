import styled from 'styled-components';
import { useState } from 'react';

import Separator from 'app/components/atoms/separator';
import Button from 'app/components/atoms/button';
import Image from 'app/components/atoms/image';
import config from 'app/config';
import FilterList from 'app/components/molecules/filter-list';

/* eslint-disable-next-line */
export interface FiltersProps {
  FilterList: Array<{
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

const StyledFilters = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 1.2vw;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 140%;
  width: 70rem;
  height: 47rem;
  z-index: 100001;
`;

interface IAppliedFilters {
  Filters: Array<object>;
}

const StyledAppliedFilters = styled.div``;

export function Filters(props: FiltersProps) {
  const [showFilterList, setShowFilterList] = useState(false);
  const clickFilterHandler = () => {
    setShowFilterList(true);
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
        <Image Image={config.images.PlusIcon} MarginRight="1rem" />
        <span>Add filter</span>
      </Button>
      {showFilterList && (
        <Wrapper>
          <FilterList
            Filters={props.FilterList}
            ActiveFilters={props.ActiveFilters}
            ApplyFilterHandler={props.ApplyFilterHandler}
          />
        </Wrapper>
      )}
      <Separator Vertical Color="#f7f7f7" ColorType="light" />
    </StyledFilters>
  );
}

export default Filters;
