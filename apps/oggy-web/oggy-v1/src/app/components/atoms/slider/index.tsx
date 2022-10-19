import styled from 'styled-components';
import Container from 'app/components/atoms/container';
import { useCallback, useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';
import { useDeviceType } from 'app/hooks/useDeviceType.hook';
/* eslint-disable-next-line */
export interface SliderProps {
  children: JSX.Element[];
  Gap?: string;
  Padding?: string;
}

const StyledSlider = styled.div`
  width: 100%;
  position: relative;

  .show-shadow {
    &::after {
      content: ' ';
      transition: all 0.2s ease;
      height: 100%;
      width: 5px;
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: 0px 0px 28px 1px rgba(0, 0, 0, 0.2);
      transform: translateX(100%);
    }
    &::before {
      content: ' ';
      transition: all 0.2s ease;
      height: 100%;
      width: 5px;
      position: absolute;
      top: 0;
      left: 0;
      box-shadow: 0px 0px 28px 1px rgba(0, 0, 0, 0.2);
      transform: translateX(-100%);
    }
  }
`;

export function Slider(props: SliderProps) {
  const device = useDeviceType();
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderRefChild = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [gap, setGap] = useState<any>();
  const handleScroll = useCallback(
    throttle(() => {
      if (sliderRef.current) {
        // console.log('Scroll Left: ' + sliderRef.current.scrollLeft);
        // console.log('Slider Width: ' + sliderRef.current.clientWidth);
        // console.log('Scroll Width: ' + sliderRef.current.scrollWidth);
        // console.log(
        //   sliderRefScroll.current.clientWidth - sliderRef.current.clientWidth
        // );
        if (sliderRef.current.scrollLeft !== 0) {
          setAtStart(false);
        } else {
          setAtStart(true);
        }
        if (
          sliderRef.current.scrollLeft ===
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          setAtEnd(true);
        } else {
          setAtEnd(false);
        }
      }
    }, 300),
    []
  );
  useEffect(() => {
    if (device.greaterThan('md')) {
      sliderRef.current?.addEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (sliderRef.current && sliderRefChild.current) {
      const total = Math.floor(
        sliderRef.current?.clientWidth /
          (sliderRefChild.current?.clientWidth + 20)
      );
      setGap(
        (sliderRef.current?.clientWidth -
          total * sliderRefChild.current?.clientWidth) /
          (total - 1)
      );
    }
  }, [sliderRef.current?.clientWidth]);
  return (
    <StyledSlider>
      <Container OverflowHide>
        <Container
          Ref={sliderRef}
          SpaceBetweenMA
          ScrollStyle="Hide"
          ScrollX
          PaddingLeft={device.lessThan('md') && props.Padding}
          PaddingRight={device.lessThan('md') && props.Padding}
          PaddingTop="30px"
          PaddingBottom="30px"
        >
          <Container
            Row
            Gap={device.greaterThan('md') ? `${gap}px` : '2rem'}
            style={{ boxSizing: 'initial' }}
            Width="max-content"
          >
            {props.children.map((child) => {
              return <Container Ref={sliderRefChild}>{child}</Container>;
            })}
          </Container>
        </Container>
      </Container>
      {
        //* Left Slider Arrow
        (device.greaterThan('md') && !atStart && (
          <Container
            ClickHandler={() => {
              console.log(gap);
              sliderRef.current?.scroll(
                sliderRefChild.current
                  ? sliderRef.current.scrollLeft -
                      sliderRefChild.current.clientWidth -
                      gap -
                      1
                  : 0,
                0
              );
            }}
            Position={{ Type: 'absolute', Left: '0', Top: '0' }}
            style={{ transform: 'translateX(-50%)' }}
            Width="fit-content"
            Height="80%"
            CenterCA
          >
            <Container
              Shape="Circle"
              Width="fit-content"
              Height="fit-content"
              BG="White"
              Padding="15px"
              Elevation={{ L2: true }}
            >
              <MdOutlineArrowBackIos />
            </Container>
          </Container>
        )) ||
          null
      }
      {
        //* Right Slider Arrow
        (device.greaterThan('md') && !atEnd && (
          <Container
            ClickHandler={() => {
              console.log();
              sliderRef.current?.scroll(
                sliderRefChild.current
                  ? sliderRef.current.scrollLeft +
                      sliderRefChild.current.clientWidth +
                      gap +
                      1
                  : 0,
                0
              );
            }}
            Position={{ Type: 'absolute', Right: '0', Top: '0' }}
            style={{ transform: 'translateX(50%)' }}
            Height="80%"
            Width="fit-content"
            CenterCA
          >
            <Container
              Shape="Circle"
              Width="fit-content"
              Height="fit-content"
              BG="White"
              Padding="15px"
              Elevation={{ L2: true }}
            >
              <MdOutlineArrowForwardIos />
            </Container>
          </Container>
        )) ||
          null
      }
    </StyledSlider>
  );
}

export default Slider;
