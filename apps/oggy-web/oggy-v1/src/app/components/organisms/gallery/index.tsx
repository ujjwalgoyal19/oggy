import styled from 'styled-components';

/* eslint-disable-next-line */
export interface GalleryProps {
  Heading: string | null;
  Data: string | null;
}

const StyledGallery = styled.div``;

export function Gallery(props: GalleryProps) {
  return <StyledGallery></StyledGallery>;
}

export default Gallery;
