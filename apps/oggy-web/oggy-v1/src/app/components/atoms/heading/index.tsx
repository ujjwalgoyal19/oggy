import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface HeadingProps {
  Heading?: {
    size?: string;
    weight?: string;
    fontFamily?: string;
  };
  Engraved?: boolean;
  Embossed?: boolean;
  HeadingSize?: string;
  HeadingWeight?: string;
  HeadingColor?: string;
  MarginLeft?: string;
  MarginRight?: string;
  MarginTop?: string;
  MarginBottom?: string;
  TextAlign?: string;
  children: string | JSX.Element[] | null;
}

interface IStyledHeading {
  heading?: {
    size?: string;
    weight?: string;
    fontFamily?: string;
  };
  style?: string;
  headingSize?: string;
  headingWeight?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  textAlign?: string;
  color?: string;
  engraved?: boolean;
}

const StyledHeading = styled.h1<IStyledHeading>`
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.headingSize || props.heading?.size};
  font-weight: ${(props) => props.headingWeight || props.heading?.weight};
  margin-left: ${(props) => props.marginLeft || 'none'};
  margin-right: ${(props) => props.marginRight || 'none'};
  margin-top: ${(props) => props.marginTop || 'none'};
  margin-bottom: ${(props) => props.marginBottom || 'none'};
  text-align: ${(props) => props.textAlign || 'auto'};

  // Engraved Style
  ${(props) =>
    props.engraved &&
    css`
      color: transparent;
      background-color: ${props.color || 'inherit'};
      -webkit-background-clip: text;
      background-clip: text;
      text-shadow: 2px 2px 3px rgba(245, 245, 245, 0.3);
    `}
`;

const Heading = (props: HeadingProps) => {
  return (
    <StyledHeading
      color={props.HeadingColor}
      heading={props.Heading}
      headingSize={props.HeadingSize}
      headingWeight={props.HeadingWeight}
      marginBottom={props.MarginBottom}
      marginTop={props.MarginTop}
      marginLeft={props.MarginLeft}
      marginRight={props.MarginRight}
      textAlign={props.TextAlign}
      engraved={props.Engraved}
    >
      {props.children}
    </StyledHeading>
  );
};

export default Heading;
