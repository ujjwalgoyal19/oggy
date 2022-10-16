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
  const [showShadow, setShowShadow] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const handleScroll = useCallback(
    throttle(() => {
      if (sliderRef.current?.scrollLeft !== 0) {
        setAtStart(true);
        setAtEnd(false);
      } else if (
        sliderRef.current?.scrollLeft === sliderRef.current?.clientHeight
      ) {
        setAtStart(false);
      }
    }, 300),
    []
  );
  useEffect(() => {
    sliderRef.current?.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <StyledSlider>
      <Container OverflowHide>
        <Container
          Ref={sliderRef}
          SpaceBetweenMA
          ClassName={(showShadow && 'show-shadow') || ''}
          ScrollStyle="Hide"
          ScrollX
        >
          <Container Row Gap="2rem" Padding={props.Padding} Width="max-content">
            {props.children.map((child) => {
              return <Container>{child}</Container>;
            })}
          </Container>
        </Container>
      </Container>
      {(device.greaterThan('md') && atStart && (
        <Container
          ClickHandler={() => {
            sliderRef.current?.scroll(sliderRef.current.clientWidth, 0);
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
        null}
      {(device.greaterThan('md') && atEnd && (
        <Container
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
        null}
    </StyledSlider>
  );
}

export default Slider;
