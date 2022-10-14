import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ChainCardProps {
  Image: string;
  Name: string;
  Link: string;
  ClickHandler: (chain: string) => void;
}

const StyledChainCard = styled.div``;

export function ChainCard(props: ChainCardProps) {
  const device = useDeviceType();
  return (
    <StyledChainCard onClick={() => props.ClickHandler(props.Name)}>
      <Container Column Gap="2rem">
        <Link to={props.Link}>
          <Container
            Row
            Elevation={{ L2: true }}
            Border={{ Style: 'Solid', L1: true }}
            Shape="Circle"
            Width={(device.greaterThan('md') && '20rem') || '15rem'}
            Height={(device.greaterThan('md') && '20rem') || '15rem'}
            CenterCA
            CenterMA
          >
            <Container Height="60%" Width="60%">
              <Image Width="100%" Height="100%" Src={props.Image} />
            </Container>
          </Container>
        </Link>
        <Container Row CenterCA CenterMA>
          <Link to={props.Link}>
            <Text H4 B>
              {props.Name}
            </Text>
          </Link>
        </Container>
      </Container>
    </StyledChainCard>
  );
}

export default ChainCard;
