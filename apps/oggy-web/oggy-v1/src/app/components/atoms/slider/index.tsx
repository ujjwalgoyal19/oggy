import styled from 'styled-components';
import Container from 'app/components/atoms/container';
/* eslint-disable-next-line */
export interface SliderProps {
  children: JSX.Element[];
  Gap?: string;
  Padding?: string;
}

const StyledSlider = styled.div`
  width: 100%;
  position: relative;
`;

export function Slider(props: SliderProps) {
  return (
    <StyledSlider>
      <Container
        SpaceBetweenMA
        ClassName="slider__parent"
        ScrollStyle="Hide"
        ScrollX
      >
        <Container Row Gap="2rem" Padding={props.Padding} Width="max-content">
          {props.children.map((child) => {
            return <Container ClassName="slider__child">{child}</Container>;
          })}
        </Container>
      </Container>
    </StyledSlider>
  );
}

export default Slider;
