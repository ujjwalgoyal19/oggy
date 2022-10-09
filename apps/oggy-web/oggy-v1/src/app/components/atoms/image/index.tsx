import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageProps {
  Src?: string;
  Lazy?: boolean;
}

interface StyledImage {
  width?: string;
  height?: string;
}

const StyledImage = styled.img<StyledImage>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

export function Image(props: ImageProps) {
  return <StyledImage src={props.Src}></StyledImage>;
}

export default Image;
