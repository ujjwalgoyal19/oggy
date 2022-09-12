import Checkbox from 'app/components/atoms/checkbox';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MultipleOptionPickerProps {
  Options: string[];
  Active: boolean[];
  HandleOnSelect: (index: number) => void;
}

const StyledMultipleOptionPicker = styled.div`
  color: pink;
`;

export function MultipleOptionPicker(props: MultipleOptionPickerProps) {
  return (
    <StyledMultipleOptionPicker>
      {props.Options.map((option, index) => {
        return (
          <Checkbox
            key={index}
            Index={index}
            Name={option}
            Checked={props.Active[index]}
            HandleOnChange={props.HandleOnSelect}
          />
        );
      })}
    </StyledMultipleOptionPicker>
  );
}

export default MultipleOptionPicker;
