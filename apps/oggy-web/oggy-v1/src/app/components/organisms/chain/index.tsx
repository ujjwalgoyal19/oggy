import styled from 'styled-components';
import Slider from 'app/components/atoms/slider';
import Text from 'app/components/atoms/text';
import Container from 'app/components/atoms/container';
import { useDispatch } from 'react-redux';
import { searchActions } from 'app/store/search/index.slice';
import ChainCard from 'app/components/molecules/chain-card';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';

/* eslint-disable-next-line */
export interface ChainProps {
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
      <Container Column>
        {device.greaterThan('md') ? (
          <Container
            Height="fit-content"
            Column
            Gap=".7rem"
            Padding="2rem"
            MarginBottom="4rem"
          >
            <Text D6 EB>
              Hi, Jaipurite
            </Text>
            <Text D4 EB>
              <Text>Checkout top chains in your</Text>
              <Text Color="#FF8FB1"> pink city.</Text>
            </Text>
          </Container>
        ) : (
          <Container Padding="2rem">
            <Text H1 EB>
              <Text>
                <Text>Top chains in </Text>
                <Text Color="#FF8FB1">Jaipur</Text>
              </Text>
            </Text>
          </Container>
        )}
        <Slider Padding="2rem">
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
    </StyledChain>
  );
}

export default Chain;
