import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Text from '../text';

/* eslint-disable-next-line */
export interface InputProps {
  // Text Fields
  Key: number;
  Id?: string;
  Name?: string;
  Value?: string;
  Small?: boolean;
  Medium?: boolean;
  Large?: boolean;
  Placeholder?: string;
  Label?: string;
  Active?: boolean;

  //* Type of Input Field
  TextNew?: {
    Type: 'A';
    Id: string;
    Name: string;
    Placeholder: string;
    Value: string;
    ChangeHandler: any;
    Disable?: boolean;
  };
  Checkbox?: boolean;
  Radio?: boolean;
  Text?: boolean;
  Password?: boolean;
  Dropdown?: {
    Modal?: {
      Width: string;
      Height: string;
    };
    Screen?: boolean;
  };
  ChangeHandler?: any;
  children?: JSX.Element | JSX.Element[];
}

export interface IInput {
  //* Type of Input
  Checkbox?: boolean;
  Radio?: boolean;
  Text?: boolean;
  Password?: boolean;
  Small?: boolean;
  Medium?: boolean;
  Large?: boolean;
  Placeholder?: string;
  Label?: string;
  Active?: boolean;
}

const StyledInput = styled.div<IInput>`
  color: black;
  font-size: 1.7rem;
  width: 100%;
  background-color: inherit;

  .input__text__A {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-weight: 600;
    &::placeholder {
      color: #2c3333;
      font-weight: 600;
    }
  }

  ${(props) =>
    props.Checkbox &&
    css`
      & form {
        display: grid;
        grid-template-columns: 20px auto;
        gap: 0.6rem;
      }

      & input[type='checkbox'] {
        appearance: none;
        background: transparent;
        margin: 0;
        color: currentColor;
        width: 18px;
        height: 18px;
        border-radius: 4px;
        background-color: #fff;
        border: 2px solid lightgrey;
        display: grid;
        place-content: center;
        cursor: pointer;
        &:before {
          content: '';
          width: 10px;
          height: 10px;
          transform-origin: bottom left;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          background: #fff;
          clip-path: polygon(
            14% 44%,
            0 65%,
            50% 100%,
            100% 16%,
            80% 0%,
            43% 62%
          );
        }
      }
      & label {
        cursor: pointer;
      }
      ${props.Active &&
      css`
        & input[type='checkbox'] {
          border: 2px solid #faa519;
          background: #faa519;
          &:before {
            transform: scale(1);
          }
        }
      `}
    `}
`;

export function Input(props: InputProps) {
  const [checked, setChecked] = useState(props.Active);
  return (
    <StyledInput Checkbox={props.Checkbox} Active={checked}>
      {props.Checkbox && (
        <form>
          <input
            type="checkbox"
            name={props.Label}
            value={props.Label}
            checked={checked}
            onChange={() => {
              props.ChangeHandler(props.Key);
              setChecked(!checked);
            }}
          ></input>
          <label
            onClick={() => {
              props.ChangeHandler(props.Key);
              setChecked(!checked);
            }}
          >
            <Text H4 N>
              {props.Label}
            </Text>
          </label>
        </form>
      )}
      {props.TextNew && (
        <input
          type="text"
          className={{ A: 'input__text__A' }[props.TextNew.Type]}
          id={props.TextNew.Id}
          name={props.TextNew.Name}
          placeholder={props.TextNew.Placeholder}
          onChange={props.TextNew.ChangeHandler}
          value={props.TextNew.Value}
          disabled={props.TextNew.Disable}
          autoComplete="off"
        />
      )}
    </StyledInput>
  );
}

export default Input;
