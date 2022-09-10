import styled from 'styled-components';
import LinkHoverImage from 'app/components/molecules/link-hover-image';
import Heading from 'app/components/atoms/heading';
import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import config from 'app/config';

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
  color: inherit;
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.388889vw;
`;

const HeadingWrapper = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Locality = forwardRef<HTMLDivElement, LocalityProps>(
  (props: LocalityProps, ref) => {
    const [overlay, setOverlay] = useState(false);
    const hoverHandler = (value: boolean) => {
      setOverlay(value);
    };
    return (
      <div ref={ref}>
        <HeadingWrapper>
          <Heading
            Heading={config.components.heading.hero}
            HeadingColor="inherit"
            HeadingSize="15rem"
          >
            Location
          </Heading>
        </HeadingWrapper>
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
      </div>
    );
  }
);

export default Locality;
