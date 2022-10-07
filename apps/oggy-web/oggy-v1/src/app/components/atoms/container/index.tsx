import styled, { css } from 'styled-components';
import convert from 'color-convert';

/* eslint-disable-next-line */
export interface ContainerProps {
  // Flex Properties
  //// Type of Container
  Row?: boolean;
  Column?: boolean;
  Wrap?: boolean;
  Gap?: string;
  //// Flex Grow Shrink Basis
  Grow?: boolean;
  Shrink?: boolean;
  Basis?: string;
  //// Flex Cross Axis Main Axis Alignments
  SpaceBetweenMA?: boolean;
  CenterMA?: boolean;
  EndMA?: boolean;
  SpaceBetweenCA?: boolean;
  CenterCA?: boolean;
  EndCA?: boolean;
  StartCA?: boolean;
  StartMA?: boolean;

  // Container Properties
  //// Padding
  PaddingBottom?: string;
  PaddingTop?: string;
  PaddingLeft?: string;
  PaddingRight?: string;
  Padding?: string;
  //// Margin
  MarginBottom?: string;
  MarginTop?: string;
  MarginLeft?: string;
  MarginRight?: string;
  Margin?: string;
  //// Dimensions
  Width?: string;
  MaxWidth?: string;
  MinWidth?: string;
  Height?: string;
  MaxHeight?: string;
  MinHeight?: string;
  BG?: string;
  Hover?: {
    BG?: string;
  };
  Position?: {
    Type?: string;
    Top?: string;
    Bottom?: string;
    Left?: string;
    Right?: string;
  };

  // Extra Styles
  style?: React.CSSProperties;
  Elevation?: {
    Tint?: boolean;
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  };
  Border?: {
    Elegant?: boolean;
    Dotted?: boolean;
    Level?: number;
  };
  Shape?: 'CS1' | 'CS2' | 'CS3' | 'Circle';

  Color?: string;
  ClassName?: string;
  ScrollStyle?: 'Hide';
  ScrollX?: boolean;
  ScrollY?: boolean;
  children?: string | JSX.Element | JSX.Element[] | null | any;
}

interface IContainer {
  // Type of container
  Row?: boolean;
  Column?: boolean;
  Gap?: string;

  // Flex Properties
  Grow?: boolean;
  Shrink?: boolean;
  Basis?: string;
  Wrap?: boolean;

  // Type of spacing
  StartCA?: boolean;
  StartMA?: boolean;
  CenterMA?: boolean;
  SpaceBetweenMA?: boolean;
  EndMA?: boolean;
  CenterCA?: boolean;
  SpaceBetweenCA?: boolean;
  EndCA?: boolean;

  // Transition Properties
  Hover?: { BG?: string };

  // Position Properties
  Position?: {
    Type?: string;
    Top?: string;
    Bottom?: string;
    Left?: string;
    Right?: string;
  };

  // Padding, Margin, and Border properties
  PaddingBottom?: string;
  PaddingTop?: string;
  PaddingLeft?: string;
  PaddingRight?: string;
  Padding?: string;
  Margin?: string;
  MarginBottom?: string;
  MarginTop?: string;
  MarginLeft?: string;
  MarginRight?: string;

  // Dimensions
  Width?: string;
  MaxWidth?: string;
  MinWidth?: string;
  Height?: string;
  MaxHeight?: string;
  MinHeight?: string;

  // ExtraStyles
  Elevation?: {
    Tint?: boolean;
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  }; // Levels 0, 1, 2, 3
  Border?: {
    Elegant?: boolean;
    Dotted?: boolean;
    Level?: number;
  };
  Shape?: 'CS1' | 'CS2' | 'CS3' | 'Circle';

  // Container Properties
  BG?: string;
  ScrollStyle?: 'Hide';
  ScrollX?: boolean;
  ScrollY?: boolean;
}

const getHSL = (value: string) => {
  const hsl = convert.hex.hsl(value);
  console.log(`${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`);
  return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};

const StyledContainer = styled.div<IContainer>`
  // Default Properties
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  padding: 0;
  margin: 0;
  background-color: inherit;
  transition: all 0.2s ease;

  ${(props) =>
    props.Shape &&
    {
      CS1: css`
        border-radius: 1rem;
      `,
      CS2: css`
        border-radius: 2rem;
      `,
      CS3: css`
        border-radius: 3rem;
      `,
      Circle: css`
        border-radius: 50%;
      `,
    }[props.Shape]};

  ${(props) =>
    props.Elevation &&
    css`
      --low-transparency: ${(props.Elevation.Tint && 0.34) || 0.1};
      --medium-transparency: ${(props.Elevation.Tint && 0.29) || 0.09};
      --high-transparency: ${(props.Elevation.Tint && 0.27) || 0.08};

      --shadow-color: ${(props.Elevation.Tint &&
        (props.Elevation.Color
          ? getHSL(props.Elevation.Color)
          : props.BG && getHSL(props.BG))) ||
      '0deg 0% 0%'};
      --shadow-elevation-low: 0.6px 0.7px 1px
          hsl(var(--shadow-color) / var(--low-transparency)),
        1px 1.2px 1.8px -1.2px hsl(var(--shadow-color) / var(--low-transparency)),
        2.3px 3px 4.3px -2.5px hsl(var(--shadow-color) / var(--low-transparency));
      --shadow-elevation-medium: 0.6px 0.7px 1px
          hsl(var(--shadow-color) / var(--medium-transparency)),
        1.5px 2px 2.8px -0.6px hsl(var(--shadow-color) /
              var(--medium-transparency)),
        3px 3.9px 5.5px -1.2px hsl(var(--shadow-color) /
              var(--medium-transparency)),
        6px 7.8px 11.1px -1.9px hsl(var(--shadow-color) /
              var(--medium-transparency)),
        11.6px 15px 21.3px -2.5px hsl(var(--shadow-color) /
              var(--medium-transparency));
      --shadow-elevation-high: 0.6px 0.7px 1px
          hsl(var(--shadow-color) / var(--high-transparency)),
        2.8px 3.6px 5.1px -0.3px hsl(var(--shadow-color) /
              var(--high-transparency)),
        4.9px 6.4px 9.1px -0.6px hsl(var(--shadow-color) /
              var(--high-transparency)),
        7.5px 9.7px 13.8px -0.8px hsl(var(--shadow-color) /
              var(--high-transparency)),
        10.9px 14.1px 20px -1.1px hsl(var(--shadow-color) /
              var(--high-transparency)),
        15.7px 20.4px 29px -1.4px hsl(var(--shadow-color) /
              var(--high-transparency)),
        22.4px 28.9px 41.1px -1.7px hsl(var(--shadow-color) /
              var(--high-transparency)),
        31.3px 40.5px 57.6px -1.9px hsl(var(--shadow-color) /
              var(--high-transparency)),
        43px 55.6px 79.1px -2.2px hsl(var(--shadow-color) /
              var(--high-transparency)),
        58px 75px 106.7px -2.5px hsl(var(--shadow-color) /
              var(--high-transparency));

      box-shadow: ${props.Elevation.L1 && 'var(--shadow-elevation-low)'};
      box-shadow: ${props.Elevation.L2 && 'var(--shadow-elevation-medium)'};
      box-shadow: ${props.Elevation.L3 && 'var(--shadow-elevation-high)'};
    `}

  ${(props) =>
    props.Hover &&
    css`
      &:hover {
        background-color: ${props.Hover.BG};
      }
    `}

  // Styles
  ${(props) => props.Elevation && css``}
  

  ${(props) =>
    css`
      //* Flex Properties
      flex-grow: ${props.Grow && '1'};
      flex-shrink: ${props.Shrink && '0'};
      flex-basis: ${props.Basis};
      flex-direction: ${props.Row && 'row'};
      flex-direction: ${props.Column && 'column'};
      flex-wrap: ${props.Wrap && 'wrap'};
      justify-content: ${props.SpaceBetweenMA && 'space-between'};
      justify-content: ${props.CenterMA && 'center'};
      justify-content: ${props.EndMA && 'flex-end'};
      justify-content: ${props.StartMA && 'flex-start'};
      align-items: ${props.SpaceBetweenCA && 'space-between'};
      align-items: ${props.CenterCA && 'center'};
      align-items: ${props.EndCA && 'flex-end'};
      align-items: ${props.StartCA && 'flex-start'};
      gap: ${props.Gap};

      //* Dimensions
      width: ${props.Width};
      height: ${props.Height};
      max-width: ${props.MaxWidth};
      max-height: ${props.MaxHeight};
      min-width: ${props.MinWidth};
      min-height: ${props.MinHeight};

      //* Padding and Margins
      padding-top: ${props.PaddingTop};
      padding-bottom: ${props.PaddingBottom};
      padding-left: ${props.PaddingLeft};
      padding-right: ${props.PaddingRight};
      padding: ${props.Padding};
      margin-top: ${props.MarginTop};
      margin-bottom: ${props.MarginBottom};
      margin-left: ${props.MarginLeft};
      margin-right: ${props.MarginRight};
      margin: ${props.Margin};

      //* BackgroundColor
      background-color: ${props.BG};

      overflow-y: initial;
      overflow-x: initial;
      overflow-x: ${props.ScrollX && 'auto'};
      overflow-y: ${props.ScrollY && 'auto'};

      //* Styles
      border: ${props.Border &&
      props.Border.Level &&
      {
        1: '1.5px solid #eeeeee',
      }[props.Border.Level]};

      //* Position Properties
      ${props.Position &&
      css`
        position: ${props.Position.Type};
        top: ${props.Position.Top};
        bottom: ${props.Position.Bottom};
        left: ${props.Position.Left};
        right: ${props.Position.Right};
      `};
    `}
  
  ${(props) =>
    props.ScrollStyle &&
    {
      Hide: css`
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display: none;
        }
      `,
    }[props.ScrollStyle]};
`;

export function Container(props: ContainerProps) {
  return (
    <StyledContainer
      style={props.style}
      Row={props.Row}
      Column={props.Column}
      Grow={props.Grow}
      Shrink={props.Shrink}
      Basis={props.Basis}
      Margin={props.Margin}
      MarginBottom={props.MarginBottom}
      MarginTop={props.MarginTop}
      MarginLeft={props.MarginLeft}
      MarginRight={props.MarginRight}
      Padding={props.Padding}
      PaddingBottom={props.PaddingBottom}
      PaddingTop={props.PaddingTop}
      PaddingLeft={props.PaddingLeft}
      PaddingRight={props.PaddingRight}
      Width={props.Width}
      MaxWidth={props.MaxWidth}
      MinWidth={props.MinWidth}
      Height={props.Height}
      MaxHeight={props.MaxHeight}
      MinHeight={props.MinHeight}
      Gap={props.Gap}
      CenterCA={props.CenterCA}
      SpaceBetweenCA={props.SpaceBetweenCA}
      EndCA={props.EndCA}
      CenterMA={props.CenterMA}
      StartCA={props.StartCA}
      StartMA={props.StartMA}
      SpaceBetweenMA={props.SpaceBetweenMA}
      BG={props.BG}
      Wrap={props.Wrap}
      Position={props.Position}
      ScrollStyle={props.ScrollStyle}
      Shape={props.Shape}
      ScrollX={props.ScrollX}
      ScrollY={props.ScrollY}
      Elevation={props.Elevation}
      Border={props.Border}
      EndMA={props.EndMA}
      Hover={props.Hover}
      className={props.ClassName}
    >
      {props.children}
    </StyledContainer>
  );
}

export default Container;
