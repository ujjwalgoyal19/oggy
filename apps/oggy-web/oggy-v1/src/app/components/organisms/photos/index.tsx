import Container from 'app/components/atoms/container';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { motion } from 'framer-motion';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PhotosProps {
  Image: any[];
}

const StyledPhotos = styled.div`
  color: pink;
`;

const RestaurantImage = styled(motion.img)`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  border-radius: 7px;
  filter: unset;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
`;

export function Photos(props: PhotosProps) {
  const device = useDeviceType();
  return (
    <StyledPhotos>
      <Container Row Wrap Gap="1%" SpaceBetweenMA>
        {props.Image.map((image) => {
          return (
            <Container
              MaxWidth={(device.greaterThan('md') && '19%') || '99%'}
              MarginBottom="1rem"
              Height="20rem"
              Column
              Shrink
            >
              <RestaurantImage src={image.url ? image.url : image} />
            </Container>
          );
        })}
      </Container>
    </StyledPhotos>
  );
}

export default Photos;
