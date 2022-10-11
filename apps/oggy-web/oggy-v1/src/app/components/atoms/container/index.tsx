import styled, { css } from 'styled-components';
import convert from 'color-convert';
import React from 'react';

/* eslint-disable-next-line */
export interface ContainerProps {
  Ref?: React.RefObject<HTMLDivElement>;
  /*
   * Flex Properties
   * * Type of Container -> Row | Column
   * * Wrap Properties
   * * NoWrap
   * * Gap
   * * Flex Properties -> Grow | Shrink | Basis
   */
  Row?: boolean;
  Column?: boolean;
  Wrap?: boolean;
  Gap?: string;
  Grow?: boolean;
  Shrink?: boolean;
  Basis?: string;

  //* Flex Cross Axis Main Axis Alignments
  SpaceBetweenMA?: boolean;
  CenterMA?: boolean;
  EndMA?: boolean;
  SpaceBetweenCA?: boolean;
  CenterCA?: boolean;
  EndCA?: boolean;
  StartCA?: boolean;
  StartMA?: boolean;
  StretchCA?: boolean;
  StretchMA?: boolean;

  //* Container Properties
  //* Padding
  PaddingBottom?: string;
  PaddingTop?: string;
  PaddingLeft?: string;
  PaddingRight?: string;
  Padding?: string;

  //* Margin
  MarginBottom?: string;
  MarginTop?: string;
  MarginLeft?: string;
  MarginRight?: string;
  Margin?: string;

  //* Dimensions
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

  //* Extra Styles

  //* ZIndex
  Index?: number;

  /*
   * Behavior
   * * Overflow
   **/
  OverflowHide?: boolean;
  OverflowHideX?: boolean;
  OverflowHideY?: boolean;
  ScrollX?: boolean;
  ScrollY?: boolean;

  /*
   * Styles
   * * Inline Styles
   * * Scroll Bar Styles -> Hide
   * * Elevation Styles -> Tint || L1 | L2 | L3
   * * Border Styles -> Solid | Dotted || L1 | L2 | L3
   * * Shape Styles -> CS0 | CS1 | CS2 | CS3 | Circle
   **/
  style?: React.CSSProperties;
  ScrollStyle?: 'Hide';
  Elevation?: {
    Tint?: boolean;
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  };
  Border?: {
    Style: 'Solid' | 'Dotted' | 'Dashed';
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  };
  Shape?: 'CS0' | 'CS1' | 'CS2' | 'CS3' | 'Circle';

  Color?: string;

  ClassName?: string;
  children?: string | JSX.Element | JSX.Element[] | null | any;
}

interface IContainer {
  Row?: boolean;
  Column?: boolean;
  Gap?: string;
  Grow?: boolean;
  Shrink?: boolean;
  Basis?: string;
  Wrap?: boolean;
  StartCA?: boolean;
  StartMA?: boolean;
  CenterMA?: boolean;
  SpaceBetweenMA?: boolean;
  EndMA?: boolean;
  CenterCA?: boolean;
  SpaceBetweenCA?: boolean;
  EndCA?: boolean;
  StretchCA?: boolean;
  StretchMA?: boolean;
  Hover?: { BG?: string };
  Position?: {
    Type?: string;
    Top?: string;
    Bottom?: string;
    Left?: string;
    Right?: string;
  };
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
  Width?: string;
  MaxWidth?: string;
  MinWidth?: string;
  Height?: string;
  MaxHeight?: string;
  MinHeight?: string;
  Elevation?: {
    Tint?: boolean;
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  }; // Levels 0, 1, 2, 3
  Border?: {
    Style: 'Solid' | 'Dotted' | 'Dashed';
    Color?: string;
    L1?: boolean;
    L2?: boolean;
    L3?: boolean;
  };
  Shape?: 'CS0' | 'CS1' | 'CS2' | 'CS3' | 'Circle';
  Index?: number;
  BG?: string;
  ScrollStyle?: 'Hide';
  /*
   * Behavior
   * * Overflow
   **/
  OverflowHide?: boolean;
  OverflowHideX?: boolean;
  OverflowHideY?: boolean;
  ScrollX?: boolean;
  ScrollY?: boolean;
}

const getHSL = (value: string) => {
  const hsl = convert.hex.hsl(value);
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

  //* Container Elevation
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
      align-items: ${props.StretchCA && 'stretch'};
      justify-content: ${props.StretchMA && 'stretch'};
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

      //* Overflow Behavior
      overflow-x: ${props.ScrollX && 'auto'};
      overflow-y: ${props.ScrollY && 'auto'};
      overflow: ${props.OverflowHide && 'hidden'};
      overflow-y: ${props.OverflowHideY && 'hidden'};
      overflow-x: ${props.OverflowHideX && 'hidden'};

      //* Styles
      //* Container Shape
      ${props.Shape &&
      {
        CS0: css`
          border-radius: 0.5rem;
        `,
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

      //* Border Properties
      ${props.Border &&
      css`
        --border-type: ${{ Solid: 'solid', Dotted: 'dotted', Dashed: 'dashed' }[
          props.Border.Style
        ]};
        --border-color: ${props.Border.Color || '#eeeeee'};
        --border-size: ${props.Border.L1 && '1.5px'};
        --border-size: ${props.Border.L2 && '2.0px'};
        --border-size: ${props.Border.L3 && '3.5px'};

        border: var(--border-size) var(--border-type) var(--border-color);
      `};

      //* Position Properties
      z-index: ${props.Index};
      ${props.Position &&
      css`
        position: ${props.Position.Type};
        top: ${props.Position.Top};
        bottom: ${props.Position.Bottom};
        left: ${props.Position.Left};
        right: ${props.Position.Right};
      `};

      //* Container Hover Animation Interactions
      ${props.Hover &&
      css`
        &:hover {
          background-color: ${props.Hover.BG};
        }
      `}
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
      ref={props.Ref}
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
      OverflowHide={props.OverflowHide}
      OverflowHideX={props.OverflowHideX}
      OverflowHideY={props.OverflowHideY}
      ScrollX={props.ScrollX}
      ScrollY={props.ScrollY}
      Elevation={props.Elevation}
      Border={props.Border}
      EndMA={props.EndMA}
      Hover={props.Hover}
      Index={props.Index}
      StretchCA={props.StretchCA}
      StretchMA={props.StretchMA}
      className={props.ClassName}
    >
      {props.children}
    </StyledContainer>
  );
}

export default Container;
