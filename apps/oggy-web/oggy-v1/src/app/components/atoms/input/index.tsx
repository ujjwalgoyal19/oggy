import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

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
  Checkbox?: boolean;
  Radio?: boolean;
  Text?: boolean;
  Password?: boolean;
  Dropdown?: boolean;
  DWidth?: string;
  DHeight?: string;
  ChangeHandler: any;
  children?: JSX.Element | JSX.Element[];
}

export interface IInput {
  Small?: boolean;
  Medium?: boolean;
  Large?: boolean;
  Placeholder?: string;
  Label?: string;
  Active?: boolean;
  Checkbox?: boolean;
  Radio?: boolean;
  Text?: boolean;
  Password?: boolean;
  Dropdown?: boolean;
  DWidth?: string;
  DHeight?: string;
}

const StyledInput = styled.div<IInput>`
  color: black;
  font-size: 1.7rem;
  width: 100%;

  ${(props) =>
    props.Dropdown &&
    css`
      position: relative;
    `}

  ${(props) =>
    (props.Text || props.Dropdown) &&
    css`
      & input[type='text'] {
        border: none;
        width: 100%;
        &:focus {
          outline: none;
        }
      }
    `}

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

interface IDropList {
  Visible?: boolean;
  DWidth?: string;
  DHeight?: string;
}

const DropList = styled.div<IDropList>`
  overflow-y: auto;
  background-color: white;
  border-radius: 0.6rem;
  border: 0.1rem solid rgb(232, 232, 232);
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.04);
  height: fit-content;
  width: ${(props) => props.DWidth};
  max-height: ${(props) => props.DHeight};
  position: absolute;
  margin-top: 3rem;
  top: 100%;
  left: -2rem;
  transform: scale(0);
  transform-origin: top;
  transition: 125ms transform ease;
  z-index: 10000;
  ${(props) =>
    props.Visible &&
    css`
      transform: scale(1);
    `};
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export function Input(props: InputProps) {
  const [value, setValue] = useState(props.Value);
  const [event, setEvent] = useState<any>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (event) {
        props.ChangeHandler(event);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(props.Active);
  return (
    <StyledInput
      Checkbox={props.Checkbox}
      Text={props.Text}
      Dropdown={props.Dropdown}
      Active={checked}
    >
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
            {props.Label}
          </label>
        </form>
      )}
      {props.Text && (
        <input
          type="text"
          id={props.Id}
          name={props.Name}
          placeholder={props.Placeholder}
          onChange={props.ChangeHandler}
          value={props.Value}
        />
      )}
      {props.Dropdown && props.children && (
        <>
          <input
            type="text"
            id={props.Id}
            name={props.Name}
            placeholder={props.Placeholder}
            onChange={(e) => {
              setValue(e.target.value);
              setEvent(e);
            }}
            onFocus={() => {
              setVisible(true);
            }}
            autoComplete="off"
            value={value}
          />
          {visible && <Modal onClick={() => setVisible(false)}></Modal>}
          <DropList
            Visible={visible}
            DWidth={props.DWidth}
            DHeight={props.DHeight}
            onClick={() => setVisible(false)}
          >
            {props.children}
          </DropList>
        </>
      )}
    </StyledInput>
  );
}

export default Input;
