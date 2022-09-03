import styled from 'styled-components';
import Image from 'app/components/atoms/image';

/* eslint-disable-next-line */
export interface CircleCardProps {
  image?: {
    src: string;
    height: string;
    width: string;
  };
  size: string;
  text?: string;
  link: string;
}

interface IStyledCircleCardImage {
  size: string;
}

const StyledCircleCardImage = styled.a<IStyledCircleCardImage>`
  box-sizing: border-box;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  padding: 3%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  // border: 2px solid grey;
  border-radius: 50%;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  img {
    width: 60%;
    height: auto;
  }
`;
const StyledCircleCardText = styled.a`
  display: block;
  text-decoration: none;
  color: #1d1d1b;
  font-weight: 600;
  margin-top: 2rem;
`;

const StyledCircleCard = styled.div`
  text-align: center;
`;

export function CircleCard(props: CircleCardProps) {
  return (
    <StyledCircleCard>
      <StyledCircleCardImage href={props.link} size={props.size}>
        {props.image ? <Image Image={props.image} /> : null}
      </StyledCircleCardImage>
      {props.text ? (
        <StyledCircleCardText href={props.link}>
          {props.text}
        </StyledCircleCardText>
      ) : null}
    </StyledCircleCard>
  );
}

export default CircleCard;
