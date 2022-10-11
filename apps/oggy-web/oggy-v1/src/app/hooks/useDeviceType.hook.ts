import { useEffect, useState } from 'react';
import {
  defaultBreakpoints,
  DefaultBreakpoints,
} from './styledMediaQuery.hook';

const getSizeFromBreakpoint = (breakpoint: keyof DefaultBreakpoints) => {
  return parseInt(defaultBreakpoints[breakpoint].replace(/\D/g, ''));
};

export function useDeviceType() {
  const [screenSize, getDimensions] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const lessThan = (breakpoint: keyof DefaultBreakpoints) => {
    if (screenSize.dynamicWidth < getSizeFromBreakpoint(breakpoint)) {
      return true;
    } else {
      return false;
    }
  };

  const greaterThan = (breakpoint: keyof DefaultBreakpoints) => {
    if (screenSize.dynamicWidth > getSizeFromBreakpoint(breakpoint)) {
      return true;
    } else {
      return false;
    }
  };

  const between = (
    startBreakpoint: keyof DefaultBreakpoints,
    endBreakpoint: keyof DefaultBreakpoints
  ) => {
    if (
      screenSize.dynamicWidth > getSizeFromBreakpoint(startBreakpoint) &&
      screenSize.dynamicWidth < getSizeFromBreakpoint(endBreakpoint)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const setDimensions = () => {
    getDimensions({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight * 0.01 + 'px'
    );
    document.documentElement.style.setProperty(
      '--vw',
      window.innerWidth * 0.01 + 'px'
    );
  };

  const getHeight = (value: number): string => {
    return value * (screenSize.dynamicHeight / 100) + 'px';
  };

  const getWidth = (value: number): string => {
    return value * (screenSize.dynamicWidth / 100) + 'px';
  };

  useEffect(() => {
    setDimensions();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDimensions();
    });

    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, [screenSize]);

  return Object.assign({ lessThan, greaterThan, between, getWidth, getHeight });
}
