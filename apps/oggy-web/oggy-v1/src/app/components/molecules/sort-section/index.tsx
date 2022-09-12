import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RadioOptionPicker from '../radio-option-picker';

/* eslint-disable-next-line */
export interface SortSectionProps {
  Filters: Array<{
    command: string;
    text: string;
  }>;
  Active: Array<boolean> | undefined;
  FilterHandler: (section: number, filter: boolean[]) => void;
}

const StyledSortSection = styled.div``;

export function SortSection(props: SortSectionProps) {
  const [radioState, setRadioState] = useState(
    props.Active ? props.Active : new Array(props.Filters.length).fill(false)
  );
  const handleOnChange = (position: number) => {
    const updateRadioState = radioState.map((item, index) =>
      index === position ? true : false
    );
    setRadioState(updateRadioState);
    props.FilterHandler(0, updateRadioState);
  };
  return (
    <StyledSortSection>
      <RadioOptionPicker
        Active={radioState}
        ChangeSelectedOption={handleOnChange}
        Options={props.Filters?.map((filter) => filter.text)}
      />
    </StyledSortSection>
  );
}

export default SortSection;
