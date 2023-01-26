import React from 'react';

import utils from '../utils';

const useDimensions = () => {
  React.useEffect(() => {
    const debouncedHandleResize = utils.debounce(function handleResize() {
      // Get view port height and multiply by `1%` to convert to `vh` unit
      const vh: number = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // dispatch(
      //   updateWindowDimensionAXN({
      //     height: window.innerHeight,
      //     width: window.innerWidth,
      //   }),
      // );
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);
};

export default useDimensions;
