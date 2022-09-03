import { components } from 'app/config';
import styled from 'styled-components';
import Heading from 'app/components/atoms/heading';
import Slider from 'app/components/atoms/slider';
import CircleCard from 'app/components/atoms/circle-card';

/* eslint-disable-next-line */
export interface ChainProps {
  Heading: string;
  Content: {
    name: string;
    image: {
      src: string;
      height: string;
      width: string;
    };
    url: string;
  }[];
}

const StyledChain = styled.div``;

export function Chain(props: ChainProps) {
  return (
    <StyledChain>
      <Heading
        Heading={components.heading.primary}
        HeadingWeight="800"
        HeadingColor="#1D1D1B"
        MarginBottom="4rem"
        Text="Top Chain in Jaipur"
      />
      <Slider childSize={170}>
        {props.Content.map((chain, index) => {
          return (
            <CircleCard
              key={index}
              image={chain.image}
              text={chain.name}
              link={chain.url}
              size="17rem"
            />
          );
        })}
      </Slider>
    </StyledChain>
  );
}

export default Chain;
