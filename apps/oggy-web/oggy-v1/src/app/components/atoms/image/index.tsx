import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageProps {
  Image: {
    src: string;
    height: string;
    width: string;
    radius?: string;
  };
  MarginRight?: string;
}

interface StyledImage {
  width: string;
  height: string;
  marginRight?: string;
}

const StyledImage = styled.img<StyledImage>`
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  margin-right: ${(props) => props.marginRight || '0'};
`;

export function Image(props: ImageProps) {
  return (
    <StyledImage
      width={props.Image.width}
      height={props.Image.height}
      marginRight={props.MarginRight}
      src={props.Image.src}
    ></StyledImage>
  );
}

export default Image;
