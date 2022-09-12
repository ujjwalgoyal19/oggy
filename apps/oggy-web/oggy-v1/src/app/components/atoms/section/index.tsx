import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface SectionProps {
  Width?: string;
  Height?: string;
  MarginBottom?: string;
  MarginTop?: string;
  MarginRight?: string;
  MarginLeft?: string;
  Padding?: string;
  Sticky?: boolean;
  Index?: number;
  BackgroundColor?: string;
  children: JSX.Element | JSX.Element[] | null;
}

interface ISectionWrapper {
  width?: string;
  height?: string;
  marginBottom?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  padding?: string;
  index?: number;
  backgroundColor?: string;
  sticky?: boolean;
}

const StyledSection = styled.section<ISectionWrapper>`
  ${(props) =>
    props.sticky &&
    css`
      position: sticky;
      position: -webkit-sticky;
      top: 0;
    `}
  padding: ${(props) => props.padding || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || 'auto'};
  margin-top: ${(props) => props.marginTop || 'auto'};
  margin-left: ${(props) => props.marginLeft || 'auto'};
  margin-right: ${(props) => props.marginRight || 'auto'};
  background: ${(props) => props.backgroundColor || 'inherit'};
  z-index: ${(props) => props.index || '1'};
`;

export function Section(props: SectionProps) {
  return (
    <StyledSection
      width={props.Width}
      height={props.Height}
      marginTop={props.MarginTop}
      marginBottom={props.MarginBottom}
      marginLeft={props.MarginLeft}
      marginRight={props.MarginRight}
      padding={props.Padding}
      index={props.Index}
      backgroundColor={props.BackgroundColor}
      sticky={props.Sticky}
    >
      {props.children}
    </StyledSection>
  );
}

export default Section;
