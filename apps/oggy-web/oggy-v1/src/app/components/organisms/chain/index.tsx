import styled from 'styled-components';
import Slider from 'app/components/atoms/slider';
import CircleCard from 'app/components/atoms/circle-card';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import ChainCard from 'app/components/molecules/chain-card';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface ChainProps {
  Heading: string;
  Content: {
    name: string;
    image: string;
    url: string;
  }[];
}

const StyledChain = styled.div`
  width: 100%;
`;

export function Chain(props: ChainProps) {
  const dispatch = useDispatch();
  const device = useDeviceType();
  const chainClickHandler = (chain: string) => {
    dispatch(
      searchActions.changeLocation({ type: 'City', name: 'jaipur', id: '1' })
    );
    dispatch(searchActions.changeQuery(chain));
  };
  return (
    <StyledChain>
      <Container Column Gap="12vh">
        <Container
          Height="fit-content"
          Column
          Gap=".7rem"
          PaddingLeft="2rem"
          PaddingRight="2rem"
        >
          {device.greaterThan('md') ? (
            <>
              <Text D6 EB>
                Hi, Jaipurite
              </Text>
              <Text D4 EB>
                <Text>Checkout top chains in your</Text>
                <Text Color="#FF8FB1"> pink city.</Text>
              </Text>
            </>
          ) : (
            <>
              <Text H2 EB>
                Hi, Jaipurite
              </Text>
              <Text D6 EB>
                <Text>Checkout top chains in your</Text>
                <Text Color="#FF8FB1"> pink city.</Text>
              </Text>
            </>
          )}
        </Container>
        <Container Height="fit-content">
          <Slider>
            {props.Content.map((chain, index) => {
              return (
                <ChainCard
                  ClickHandler={chainClickHandler}
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
