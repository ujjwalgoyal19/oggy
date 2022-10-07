import styled from 'styled-components';
import Slider from 'app/components/atoms/slider';
import CircleCard from 'app/components/atoms/circle-card';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import ChainCard from 'app/components/molecules/chain-card';

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

const StyledChain = styled.div`
  max-width: 100%;
`;

export function Chain(props: ChainProps) {
  const dispatch = useDispatch();
  const localityClickHandler = (chain: string) => {
    dispatch(searchActions.changeQuery(chain));
  };
  return (
    <StyledChain>
      <Container Column Gap="12vh">
        <Container Height="fit-content" Column Gap=".7rem">
          <Text D6 EB>
            Hi, Jaipurite
          </Text>
          <Text D4 EB>
            <Text>Checkout top chains in your</Text>
            <Text Color="#FF8FB1"> pink city.</Text>
          </Text>
        </Container>
        <Container Height="fit-content">
          {/* <Container Row Gap="4vw" ScrollX ScrollStyle="Hide"> */}
          <Slider>
            {props.Content.map((chain, index) => {
              return (
                <ChainCard
                  key={index}
                  Image={chain.image}
                  Name={chain.name}
                  Link="/search"
                />
              );
            })}
          </Slider>
        </Container>
      </Container>
    </StyledChain>
  );
}

export default Chain;
