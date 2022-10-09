import styled from 'styled-components';
import Container from 'app/components/atoms/container';
/* eslint-disable-next-line */
export interface SliderProps {
  children: JSX.Element[];
  Gap?: string;
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
        {props.children.map((child) => {
          return (
            <Container
              ClassName="slider__child"
              MarginRight={props.Gap || '1rem'}
              MarginLeft={props.Gap || '1rem'}
            >
              {child}
            </Container>
          );
        })}
      </Container>
    </StyledSlider>
  );
}

export default Slider;
