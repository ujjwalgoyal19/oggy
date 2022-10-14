import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

export const useScroll = (_refresh = 66) => {
  // if (!callback || typeof callback !== 'function') return;

  const [scrollStopped, setScrollStopped] = useState(true);

  let isScrolling: NodeJS.Timeout;

  const scrollHandler = () => {
    // console.log('too many scroll events');
    setScrollStopped(false);
    window.clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
      setScrollStopped(true);
    }, 55);
  };

  const debouncedScrollHandler = useMemo(
    () => debounce(scrollHandler, 300),
    []
  );

  window.addEventListener('scroll', debouncedScrollHandler, false);

  return scrollStopped;
};
