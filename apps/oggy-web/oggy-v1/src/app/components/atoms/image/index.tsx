import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageProps {
  Image: {
    src: string;
    height: string;
    width: string;
    radius?: string;
  };
}

interface StyledImage {
  width: string;
  height: string;
}

const StyledImage = styled.img`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
`;

export function Image(props: ImageProps) {
  return (
    <StyledImage
      width={props.Image.width}
      height={props.Image.height}
      src={props.Image.src}
    ></StyledImage>
  );
}

export default Image;
