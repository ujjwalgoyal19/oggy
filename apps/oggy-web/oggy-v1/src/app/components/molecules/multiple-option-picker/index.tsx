import Input from 'app/components/atoms/input';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MultipleOptionPickerProps {
  Options: string[];
  Active: boolean[];
  HandleOnSelect: (index: number) => void;
}

const StyledMultipleOptionPicker = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export function MultipleOptionPicker(props: MultipleOptionPickerProps) {
  return (
    <StyledMultipleOptionPicker>
      {props.Options.map((option, index) => {
        return (
          <Input
            Checkbox
            key={index}
            Key={index}
            Label={option}
            ChangeHandler={props.HandleOnSelect}
          ></Input>
        );
      })}
    </StyledMultipleOptionPicker>
  );
}

export default MultipleOptionPicker;
