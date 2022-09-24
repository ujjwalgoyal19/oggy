import { useState } from 'react';
import styled, { css } from 'styled-components';

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

  Color?: string;
  ClassName?: string;
  ScrollX?: boolean;
  ScrollY?: boolean;
  children?: string | JSX.Element | JSX.Element[] | any | null;
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

  // Container Properties
  BG?: string;
  ScrollX?: boolean;
  ScrollY?: boolean;
}

const StyledContainer = styled.div<IContainer>`
  // Default Properties
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  padding: 0;
  margin: 0;
  background-color: white;
  transition: all 0.2s ease;

  flex-grow: ${(props) => props.Grow && '1'};
  flex-shrink: ${(props) => props.Shrink && '0'};
  flex-basis: ${(props) => props.Basis};

  ${(props) =>
    props.Hover &&
    css`
      background-color: ${props.Hover.BG};
    `}

  ${(props) =>
    css`
      // Flex Properties
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

      // Dimensions
      width: ${props.Width};
      height: ${props.Height};
      max-width: ${props.MaxWidth};
      max-height: ${props.MaxHeight};
      min-width: ${props.MinWidth};
      min-height: ${props.MinHeight};

      //Padding and Margins
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

      // BackgroundColor
      background-color: ${props.BG};

      overflow-x: ${props.ScrollX && 'auto'};
      overflow-y: ${props.ScrollY && 'auto'};

      // Position Properties
      ${props.Position &&
      css`
        position: ${props.Position.Type};
        top: ${props.Position.Top};
        bottom: ${props.Position.Bottom};
        left: ${props.Position.Left};
        right: ${props.Position.Right};
      `}
    `}
`;

export function Container(props: ContainerProps) {
  const [hover, setHover] = useState(false);
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
      ScrollX={props.ScrollX}
      ScrollY={props.ScrollY}
      EndMA={props.EndMA}
      onMouseEnter={() => setHover(props.Hover ? true : false)}
      onMouseLeave={() => setHover(false)}
      Hover={hover ? props.Hover : undefined}
      className={props.ClassName}
    >
      {props.children}
    </StyledContainer>
  );
}

export default Container;
