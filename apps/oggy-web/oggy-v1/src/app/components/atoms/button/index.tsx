import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  CTA?: boolean;
  Primary?: boolean;
  Secondary?: boolean;
  Text?: boolean;
  Image?: boolean;
  Ghost?: boolean;
  Dropdown?: boolean;
  Plus?: boolean;
  Hamburger?: boolean;
  Expendable?: boolean;
  Radio?: boolean;
  BackgroundColor?: string;
  SecondaryBackgroundColor?: string;
  Color?: string;
  children?: string | JSX.Element | JSX.Element[];
  ClickHandler?: () => void;
}

interface IStyledButton {
  Text?: boolean;
  CTA?: boolean;
  Dropdown?: boolean;
  Hamburger?: boolean;
  Plus?: boolean;
  Expendable?: boolean;
  Ghost?: boolean;
  Primary?: boolean;
  Image?: boolean;
  Secondary?: boolean;
  Radio?: boolean;
  BackgroundColor?: string;
  SecondaryBackgroundColor?: string;
  Color?: string;
}
const StyledButton = styled.button<IStyledButton>`
  all: initial;
  font: inherit;
  width: fit-content;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.Primary &&
    css`
      padding: 1rem 1.5rem 1rem 1.5rem;
      border-radius: 0.5rem;
      background-color: #ff9800;
      color: white;
      font-weight: 500;
    `}
  ${(props) => props.Secondary && css``}
  ${(props) => props.Text && css``}
  ${(props) => props.CTA && css``}
  ${(props) =>
    props.Dropdown &&
    css`
      font-size: max(1.7vh, 0.85vw);
      font-weight: 450;
      padding: 1rem 2rem 1rem 2rem;
      border-radius: 10px;
      background-color: ${props.BackgroundColor || 'transparent'};
      transition: all 0.2s ease;
      &:hover {
        background-color: ${props.SecondaryBackgroundColor || 'transparent'};
      }
    `}
  ${(props) => props.Radio && css``}
  ${(props) => props.Hamburger && css``}
  ${(props) => props.Plus && css``}
  ${(props) => props.Expendable && css``}
  ${(props) =>
    props.Ghost &&
    css`
      font-size: min(1.7vh, 0.85vw);
    `}
  ${(props) => props.Image && css``}
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={props.ClickHandler}
      CTA={props.CTA}
      Primary={props.Primary}
      Secondary={props.Secondary}
      Text={props.Text}
      Image={props.Image}
      Ghost={props.Ghost}
      Dropdown={props.Dropdown}
      Hamburger={props.Hamburger}
      Expendable={props.Expendable}
      Plus={props.Plus}
      Radio={props.Radio}
      BackgroundColor={props.BackgroundColor}
      SecondaryBackgroundColor={props.SecondaryBackgroundColor}
      Color={props.Color}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
