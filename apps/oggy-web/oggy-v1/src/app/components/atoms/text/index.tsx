import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface TextProps {
  // Font Type
  H1?: boolean;
  H2?: boolean;
  H3?: boolean;
  H4?: boolean;
  H5?: boolean;
  H6?: boolean;
  D1?: boolean;
  D2?: boolean;
  D3?: boolean;
  D4?: boolean;
  D5?: boolean;
  D6?: boolean;
  S1?: boolean;
  S2?: boolean;
  S3?: boolean;
  S4?: boolean;
  S5?: boolean;
  S6?: boolean;
  Sub?: boolean;
  Lead?: boolean;
  Muted?: boolean;

  // Decorations
  Underline?: boolean;
  UnderlineStyle?: string;
  UnderlineColor?: string;

  // Font properties
  NoWrap?: {
    Width: string;
  };
  Width?: string;

  // Write Direction
  Vertical?: boolean;

  // Font Colors
  Color?:
    | string
    | 'Primary'
    | 'Secondary'
    | 'Black'
    | 'White'
    | 'Grey'
    | 'LightGrey';

  // Font Weight
  EL?: boolean;
  L?: boolean;
  N?: boolean;
  B?: boolean;
  EB?: boolean;

  // Extra Styles
  style?: React.CSSProperties;

  children?: string | JSX.Element | JSX.Element[] | null;
}

interface IText {
  // Font Type
  H1?: boolean;
  H2?: boolean;
  H3?: boolean;
  H4?: boolean;
  H5?: boolean;
  H6?: boolean;
  D1?: boolean;
  D2?: boolean;
  D3?: boolean;
  D4?: boolean;
  D5?: boolean;
  D6?: boolean;
  S1?: boolean;
  S2?: boolean;
  S3?: boolean;
  S4?: boolean;
  S5?: boolean;
  S6?: boolean;
  Sub?: boolean;
  Lead?: boolean;
  Muted?: boolean;

  // Decorations
  Underline?: boolean;
  UnderlineStyle?: string;
  UnderlineColor?: string;

  // Write Direction
  Vertical?: boolean;

  // Font properties
  NoWrap?: {
    Width: string;
  };

  // Font Colors
  Color?:
    | string
    | 'Primary'
    | 'Secondary'
    | 'Black'
    | 'White'
    | 'Grey'
    | 'LightGrey';

  // Font Weight
  EL?: boolean;
  L?: boolean;
  N?: boolean;
  B?: boolean;
  EB?: boolean;
}

const StyledText = styled.span<IText>`
  // Default Properties
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  ${(props) => css`
    color: ${typeof props.Color === 'string' && props.Color};
    color: ${props.Color === 'Primary' && 'var(--primary-color)'};
    color: ${props.Color === 'Secondary' && 'var(--secondary-color)'};
    color: ${props.Color === 'Black' && 'var(--white-color)'};
    color: ${props.Color === 'White' && 'var(--black-color)'};
    color: ${props.Color === 'Grey' && 'var(--grey-color)'};
    color: ${props.Color === 'LightGrey' && 'var(--light-grey-color)'};
    font-weight: ${props.EL && 'var(--font-EL)'};
    font-weight: ${props.L && 'var(--font-L)'};
    font-weight: ${props.N && 'var(--font-N)'};
    font-weight: ${props.B && 'var(--font-B)'};
    font-weight: ${props.EB && 'var(--font-EB)'};
    font-size: ${props.H1 && 'var(--font-size-H1)'};
    font-size: ${props.H2 && 'var(--font-size-H2)'};
    font-size: ${props.H3 && 'var(--font-size-H3)'};
    font-size: ${props.H4 && 'var(--font-size-H4)'};
    font-size: ${props.H5 && 'var(--font-size-H5)'};
    font-size: ${props.H6 && 'var(--font-size-H6)'};
    font-size: ${props.D1 && 'var(--font-size-D1)'};
    font-size: ${props.D2 && 'var(--font-size-D2)'};
    font-size: ${props.D3 && 'var(--font-size-D3)'};
    font-size: ${props.D4 && 'var(--font-size-D4)'};
    font-size: ${props.D5 && 'var(--font-size-D5)'};
    font-size: ${props.D6 && 'var(--font-size-D6)'};
    font-size: ${props.S1 && 'var(--font-size-S1)'};
    font-size: ${props.S2 && 'var(--font-size-S2)'};
    font-size: ${props.S3 && 'var(--font-size-S3)'};
    font-size: ${props.S4 && 'var(--font-size-S4)'};
    font-size: ${props.S5 && 'var(--font-size-S5)'};
    font-size: ${props.S6 && 'var(--font-size-S6)'};
    font-size: ${props.H1 && props.Sub && 'var(--font-size-sub-H1)'};
    font-size: ${props.H2 && props.Sub && 'var(--font-size-sub-H2)'};
    font-size: ${props.H3 && props.Sub && 'var(--font-size-sub-H3)'};
    font-size: ${props.H4 && props.Sub && 'var(--font-size-sub-H4)'};
    font-size: ${props.H5 && props.Sub && 'var(--font-size-sub-H5)'};
    font-size: ${props.H6 && props.Sub && 'var(--font-size-sub-H6)'};

    // Vertical Alignment for Font
    writing-mode: ${props.Vertical && 'vertical-rl'};
    transform: ${props.Vertical && 'rotate(180deg)'};

    // Decoration Underline
    ${props.Underline &&
    css`
      text-decoration: none;
      padding-bottom: 10px;
      border-bottom: 8px ${props.UnderlineStyle || 'solid'}
        ${props.UnderlineColor || 'black'};
    `};
  `};

  ${(props) =>
    props.NoWrap &&
    css`
      width: calc(${props.NoWrap.Width});
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis; /* give the beautiful '...' effect */
    `}
`;

export function Text(props: TextProps) {
  return (
    <StyledText
      style={props.style}
      H1={props.H1}
      H2={props.H2}
      H3={props.H3}
      H4={props.H4}
      H5={props.H5}
      H6={props.H6}
      D1={props.D1}
      D2={props.D2}
      D3={props.D3}
      D4={props.D4}
      D5={props.D5}
      D6={props.D6}
      S1={props.S1}
      S2={props.S2}
      S3={props.S3}
      S4={props.S4}
      S5={props.S5}
      S6={props.S6}
      EL={props.EL}
      Sub={props.Sub}
      Muted={props.Muted}
      Lead={props.Lead}
      Vertical={props.Vertical}
      Underline={props.Underline}
      UnderlineColor={props.UnderlineColor}
      UnderlineStyle={props.UnderlineStyle}
      L={props.L}
      N={props.N}
      B={props.B}
      EB={props.EB}
      Color={props.Color}
      NoWrap={props.NoWrap}
    >
      {props.children}
    </StyledText>
  );
}

export default Text;
