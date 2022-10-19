import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import media from 'app/hooks/styledMediaQuery.hook';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface ChainCardProps {
  Image: string;
  Name: string;
  Link: string;
  Size?: 'S' | 'M' | 'L';
  ClickHandler: (chain: string) => void;
}

interface IChainCard {
  Size?: 'S' | 'M' | 'L';
}

const StyledChainCard = styled.div<IChainCard>`
  ${(props) =>
    props.Size &&
    css`
      ${media.greaterThan('md')`
            --chain-card-size: ${props.Size === 'S' ? '15rem' : ''};
            --chain-card-size: ${props.Size === 'M' ? '18rem' : ''};
            --chain-card-size: ${props.Size === 'L' ? '20rem' : ''};
          `}
      ${media.lessThan('md')`
          --chain-card-size: ${props.Size === 'S' ? '11rem' : ''};
          --chain-card-size: ${props.Size === 'M' ? '14rem' : ''};
          --chain-card-size: ${props.Size === 'L' ? '15rem' : ''};
      `}
    `}
`;

export function ChainCard(props: ChainCardProps) {
  const device = useDeviceType();
  return (
    <StyledChainCard
      onClick={() => props.ClickHandler(props.Name)}
      Size={props.Size}
    >
      <Container Column Gap="2rem">
        <Link to={props.Link}>
          <Container
            Row
            Elevation={{ L2: true }}
            Border={{ Style: 'Solid', L1: true }}
            Shape="Circle"
            Width="var(--chain-card-size)"
            Height="var(--chain-card-size)"
            CenterCA
            CenterMA
          >
            <Container Height="60%" Width="60%">
              <Image Width="100%" Height="100%" Src={props.Image} />
            </Container>
          </Container>
        </Link>
        {/* {device.greaterThan('md') ? ( */}
        <Container Row CenterCA CenterMA>
          <Link to={props.Link}>
            {props.Size === 'S' && (
              <Text H5 B Center>
                {props.Name}
              </Text>
            )}
            {props.Size === 'M' && (
              <Text H4 B Center>
                {props.Name}
              </Text>
            )}
            {props.Size === 'L' && (
              <Text H4 B Center>
                {props.Name}
              </Text>
            )}
          </Link>
        </Container>
        {/* ) : null} */}
      </Container>
    </StyledChainCard>
  );
}

export default ChainCard;
