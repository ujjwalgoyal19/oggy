import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ImageGalleryProps {
  Images: any[];
}

const StyledImageGallery = styled.div`
  display: grid;
`;

export function ImageGallery(props: ImageGalleryProps) {
  // console.log(props.Images);
  return <StyledImageGallery></StyledImageGallery>;
}

export default ImageGallery;
