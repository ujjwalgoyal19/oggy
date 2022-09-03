import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import { motion } from 'framer-motion';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LocalityProps {
  Content: {
    name: string;
    totalRestaurant: string;
    image: string;
    url: string;
  }[];
  Margin: string[];
}

const StyledLocality = styled(motion.ul)`
  padding: 0;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.388889vw;
`;

export function Locality(props: LocalityProps) {
  const [overlay, setOverlay] = useState(false);
  const hoverHandler = (value: boolean) => {
    setOverlay(value);
  };
  return (
    <StyledLocality>
      {props.Content.map((locality, index) => {
        return (
          <LinkHoverImage
            key={index}
            text={locality.name}
            image={locality.image}
            url={locality.url}
            subtext={locality.totalRestaurant + ' places'}
            hoverHandler={hoverHandler}
            hoverState={overlay}
            margin={props.Margin[index]}
          />
        );
      })}
    </StyledLocality>
  );
}

export default Locality;
