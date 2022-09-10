import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface SeparatorProps {
  Vertical?: boolean;
  Horizontal?: boolean;
  Color: string;
  ColorType: string;
}

interface IStyledSeparator {
  vertical?: boolean;
  horizontal?: boolean;
  color?: string;
}

const StyledSeparator = styled.div<IStyledSeparator>`
  background-color: ${(props) => props.color};
  ${(props) =>
    props.vertical &&
    css`
      min-height: 65%;
      width: 1.2px;
    `}
  ${(props) =>
    props.horizontal &&
    css`
      min-width: 85%;
      height: 1rem;
    `}
`;

const getColor = (col: string, colorType: string) => {
  let amt = 0;
  if (colorType === 'light') {
    amt = -40;
  } else if (colorType === 'dark') {
    amt = 20;
  }

  let usePound = false;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
};

export function Separator(props: SeparatorProps) {
  return (
    <StyledSeparator
      vertical={props.Vertical}
      horizontal={props.Horizontal}
      color={getColor(props.Color, props.ColorType)}
    ></StyledSeparator>
  );
}

export default Separator;
