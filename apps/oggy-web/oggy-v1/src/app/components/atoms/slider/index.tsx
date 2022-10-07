import styled from 'styled-components';
import Image from 'app/components/atoms/image';
import Container from 'app/components/atoms/container';
import config from 'app/config';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
/* eslint-disable-next-line */
export interface SliderProps {
  children: JSX.Element[];
  Gap?: string;
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
    childrenNumber = widthTemp / (childSize + 40);
    while (widthTemp > 0 && childrenNumber <= props.children.length) {
      if (childSize + 40 > widthTemp && childSize > widthTemp) break;
      widthTemp = widthTemp - childSize - 40;
      childrenNumber++;
    }
    setMaxShift(props.children.length - childrenNumber);
    return (widthDiv - childSize * childrenNumber) / (childrenNumber - 1);
  };

  // const handleResize = useCallback(() => {
  //   const child = gsap.utils.toArray('.slider__child')[0];
  //   if (ref.current) {
  //     setChildSize((child as Element).getBoundingClientRect().width);
  //     setGap(getGap(ref.current.offsetWidth - 20));
  //   }
  // }, []);

  // useEffect(() => {
  //   handleResize();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [handleResize]);

  return (
    <StyledSlider ref={ref}>
      <Container>
        <Container
          style={{
            transform: `translateX${-(shift * (childSize + gap))}px`,
          }}
        >
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
                  MarginRight={props.Gap || '50px'}
                >
                  {child}
                </Container>
              );
            })}
          </Container>
        </Container>
      </Container>
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
