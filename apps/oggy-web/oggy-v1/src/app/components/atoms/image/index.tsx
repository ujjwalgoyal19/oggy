import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageProps {
  Src?: string;
  Lazy?: boolean;
  Width?: string;
  Height?: string;
  Fit?: boolean;
}

interface StyledImage {
  Width?: string;
  Height?: string;
  Fit?: boolean;
}

const StyledImage = styled.img<StyledImage>`
  object-fit: cover;
  object-fit: ${(props) => props.Fit && 'contain'};
  width: ${(props) => props.Width || 'auto'};
  height: ${(props) => props.Height || 'auto'};
`;

export function Image(props: ImageProps) {
  return (
    <StyledImage
      Fit={props.Fit}
      src={props.Src}
      Width={props.Width}
      Height={props.Height}
    ></StyledImage>
  );
}

export default Image;
