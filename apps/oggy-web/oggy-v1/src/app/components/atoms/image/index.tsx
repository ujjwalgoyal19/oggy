import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageProps {
  Src?: string;
  Lazy?: boolean;
  Width?: string;
  Height?: string;
}

interface StyledImage {
  Width?: string;
  Height?: string;
}

const StyledImage = styled.img<StyledImage>`
  width: ${(props) => props.Width || 'auto'};
  height: ${(props) => props.Height || 'auto'};
`;

export function Image(props: ImageProps) {
  return (
    <StyledImage
      src={props.Src}
      Width={props.Width}
      Height={props.Height}
    ></StyledImage>
  );
}

export default Image;
