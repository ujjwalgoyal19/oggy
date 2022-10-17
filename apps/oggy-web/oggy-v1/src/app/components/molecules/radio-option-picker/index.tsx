import styled from 'styled-components';
import { useState } from 'react';
import Text from 'app/components/atoms/text';

/* eslint-disable-next-line */
export interface RadioOptionPickerProps {
  Options: string[];
  Active: boolean[];
  ChangeSelectedOption: (option: number) => void;
}

const StyledRadioOptionPicker = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`;

interface StyledRadio {
  Active?: boolean;
}

const StyledRadio = styled.label<StyledRadio>`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 2rem;
  + label {
    margin-top: 2rem;
  }
`;

export function RadioOptionPicker(props: RadioOptionPickerProps) {
  // const [activeOption, setActiveOption] = useState(props.Active);
  return (
    <StyledRadioOptionPicker>
      {props.Options.map((option, index) => {
        return (
          <StyledRadio key={index}>
            <input
              type="radio"
              value={option}
              name="option"
              checked={props.Active[index]}
              onChange={() => {
                props.ChangeSelectedOption(index);
              }}
            />
            <Text H4 N>
              {option}
            </Text>
          </StyledRadio>
        );
      })}
    </StyledRadioOptionPicker>
  );
}

export default RadioOptionPicker;
