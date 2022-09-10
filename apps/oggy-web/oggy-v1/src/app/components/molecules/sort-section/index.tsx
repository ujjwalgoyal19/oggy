import styled from 'styled-components';
import RadioOptionPicker from '../radio-option-picker';

/* eslint-disable-next-line */
export interface SortSectionProps {
  Filters: Array<{
    command: string;
    text: string;
  }>;
  Active: Array<number> | undefined;
  FilterHandler: (section: number, filter: number[]) => void;
}

const StyledSortSection = styled.div``;

export function SortSection(props: SortSectionProps) {
  const active = props.Active ? props.Active[0] : 0;
  console.log(active);
  return (
    <StyledSortSection>
      <RadioOptionPicker
        Active={active}
        ChangeSelectedOption={(option: number) => {
          const arrayOption = [option];
          props.FilterHandler(0, arrayOption);
        }}
        Options={props.Filters.map((filter) => filter.text)}
      />
    </StyledSortSection>
  );
}

export default SortSection;
