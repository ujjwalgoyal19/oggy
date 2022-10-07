import Container from 'app/components/atoms/container';
import Image from 'app/components/atoms/image';
import Text from 'app/components/atoms/text';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ChainCardProps {
  Image: {
    src: string;
    height: string;
    width: string;
    radius?: string | undefined;
  };
  Name: string;
  Link: string;
  ClickHandler: (chain: string) => void;
}

const StyledChainCard = styled.div``;

export function ChainCard(props: ChainCardProps) {
  return (
    <StyledChainCard onClick={() => props.ClickHandler(props.Name)}>
      <Container Column Gap="2rem">
        <Link to={props.Link}>
          <Container
            Row
            Elevation={{ L2: true }}
            Border={{ Style: 'Solid', L1: true }}
            Shape="Circle"
            Width="20rem"
            Height="20rem"
            CenterCA
            CenterMA
          >
            <Image Image={props.Image} />
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
