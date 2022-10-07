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
  };

  useEffect(() => {
    window.addEventListener('resize', setDimensions);

    return () => {
      window.removeEventListener('resize', setDimensions);
    };
  }, [screenSize]);

  return Object.assign({ lessThan, greaterThan, between });
}
