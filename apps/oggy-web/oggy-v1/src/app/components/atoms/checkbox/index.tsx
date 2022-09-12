import styled from 'styled-components';

/* eslint-disable-next-line */
export interface CheckboxProps {
  Name: string;
  Checked: boolean;
  HandleOnChange: (index: number) => void;
  Index: number;
}

const StyledCheckbox = styled.div`
  color: pink;
`;

export function Checkbox(props: CheckboxProps) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        name={props.Name}
        value={props.Name}
        checked={props.Checked}
        onChange={() => props.HandleOnChange(props.Index)}
      />
      <label>{props.Name}</label>
    </StyledCheckbox>
  );
}

export default Checkbox;
