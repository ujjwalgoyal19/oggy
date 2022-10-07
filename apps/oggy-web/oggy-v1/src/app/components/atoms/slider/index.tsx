import styled from 'styled-components';
import Image from 'app/components/atoms/image';
import Container from 'app/components/atoms/container';
import config from 'app/config';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
/* eslint-disable-next-line */
export interface SliderProps {
  children: JSX.Element[];
}

const StyledSlider = styled.div`
  width: 100%;
  position: relative;
`;

const SliderButton = styled.div`
  position: absolute;
  top: 9rem;
  padding: 1rem;
  background-color: white;
  border-radius: 50%;
  width: max(1vw, 1vh);
  height: max(1vw, 1vh);
  -webkit-box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LeftSliderButton = styled(SliderButton)`
  left: 1rem;
  transform: translateX(-50%) !important;
`;
const RightSliderButton = styled(SliderButton)`
  right: 1rem;
  transform: translateX(50%) !important;
`;

interface ISliderContent {
  gap: number;
  // shift: number;
}

const SliderContentWrapper = styled.div`
  overflow: hidden;
`;

const SliderContent = styled.div<ISliderContent>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  column-gap: ${(props) => props.gap}px;
  transition: transform 0.45s ease-in-out 0s;
  padding: 1rem;
`;

// transform: translateX(${(props) => props.shift}px);

export function Slider(props: SliderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [gap, setGap] = useState<number>(0);
  const [shift, setShift] = useState<number>(0);
  const [maxShift, setMaxShift] = useState<number>(0);
  const [childSize, setChildSize] = useState<number>(0);

  const Slide = (direction: string) => {
    if (direction === 'left') {
      setShift(shift - 1);
    } else if (direction === 'right') {
      setShift(shift + 1);
    }
  };

  const getGap = (widthDiv: number) => {
    let childrenNumber = 0;
    let widthTemp = widthDiv;
    while (widthTemp > 0 && childrenNumber <= props.children.length) {
      if (childSize + 40 > widthTemp && childSize > widthTemp) break;
      widthTemp = widthTemp - childSize - 40;
      childrenNumber++;
    }
    setMaxShift(props.children.length - childrenNumber);
    return (widthDiv - childSize * childrenNumber) / (childrenNumber - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      const child = gsap.utils.toArray('.slider__child')[0];
      if (ref.current) {
        setGap(getGap(ref.current.offsetWidth - 20));
        setChildSize((child as Element).getBoundingClientRect().width);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current, getGap]);

  return (
    <StyledSlider ref={ref}>
      <SliderContentWrapper>
        <Container
          style={{
            transform: `translateX${-(shift * (childSize + gap))}px`,
            overflowX: 'visible',
          }}
        >
          <Container SpaceBetweenMA Gap={`${gap}px`} ClassName="slider__parent">
            {props.children.map((child) => {
              return <Container ClassName="slider__child">{child}</Container>;
            })}
          </Container>
        </Container>
      </SliderContentWrapper>
      {shift !== 0 ? (
        <LeftSliderButton
          onClick={() => {
            Slide('left');
          }}
        >
          <Image Image={config.images.LeftArrow} />
        </LeftSliderButton>
      ) : null}
      {shift < maxShift ? (
        <RightSliderButton
          onClick={() => {
            Slide('right');
          }}
        >
          <Image Image={config.images.RightArrow} />
        </RightSliderButton>
      ) : null}
    </StyledSlider>
  );
}

export default Slider;
