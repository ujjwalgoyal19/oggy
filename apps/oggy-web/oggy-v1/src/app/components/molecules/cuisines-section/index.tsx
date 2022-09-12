import { useState } from 'react';
import styled from 'styled-components';
import MultipleOptionPicker from 'app/components/molecules/multiple-option-picker';

/* eslint-disable-next-line */
export interface CuisinesSectionProps {
  Filters: Array<{
    command: string;
    text: string;
  }>;
  Active: Array<boolean> | undefined;
  FilterHandler: (section: number, filter: boolean[]) => void;
}

const StyledCuisinesSection = styled.div``;

export function CuisinesSection(props: CuisinesSectionProps) {
  const [checkedState, setCheckedState] = useState(
    props.Active ? props.Active : new Array(props.Filters.length).fill(false)
  );

  const handleOnSelect = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    props.FilterHandler(1, updatedCheckedState);
  };

  return (
    <StyledCuisinesSection>
      <MultipleOptionPicker
        Active={checkedState}
        HandleOnSelect={handleOnSelect}
        Options={props.Filters.map((filter) => filter.text)}
      />
    </StyledCuisinesSection>
  );
}

export default CuisinesSection;
