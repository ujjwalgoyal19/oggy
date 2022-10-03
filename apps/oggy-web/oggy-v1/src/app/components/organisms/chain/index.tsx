import styled from 'styled-components';
import Slider from 'app/components/atoms/slider';
import CircleCard from 'app/components/atoms/circle-card';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';

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
          <Container Row Gap="4vw" ScrollX ScrollStyle="Hide">
            {props.Content.map((chain, index) => {
              return (
                <div
                  onClick={() => {
                    localityClickHandler(chain.name);
                  }}
                >
                  <CircleCard
                    key={index}
                    image={chain.image}
                    text={chain.name}
                    Link="/search"
                    size="17rem"
                  />
                </div>
              );
            })}
          </Container>
        </Container>
      </Container>
    </StyledChain>
  );
}

export default Chain;
