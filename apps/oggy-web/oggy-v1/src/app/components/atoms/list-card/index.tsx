import styled from 'styled-components';
import Image from 'app/components/atoms/image';
import * as config from 'app/config';

/* eslint-disable-next-line */
export interface ListCardProps {
  text: string;
  subtext: string;
  url: string;
  padding?: string;
  width?: string;
}

interface IStyledListCard {
  width?: string;
  padding?: string;
}

const StyledListCard = styled.a<IStyledListCard>`
  display: flex;
  flex-direction: row;
  min-width: ${(props) => props.width || '100%'};
  padding: ${(props) => props.padding || '1rem'};
  justify-content: space-between;
  align-items: center;
  font: inherit;
  color: inherit;
  text-decoration: none;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const StyledListCardDescription = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: unset !important;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: unset;
    margin-top: 1rem;
  }
`;

const StyledListCardIcon = styled.div`
  height: 50%;
`;

export function ListCard(props: ListCardProps) {
  return (
    <StyledListCard
      href={props.url}
      padding={props.padding}
      width={props.width}
    >
      <StyledListCardDescription>
        <h3>{props.text}</h3>
        <h5>{props.subtext}</h5>
      </StyledListCardDescription>
      <StyledListCardIcon>
        <Image Image={config.images.RightArrow} />
      </StyledListCardIcon>
    </StyledListCard>
  );
}

export default ListCard;
