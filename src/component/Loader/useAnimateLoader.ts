import React from 'react';

import { gsap } from '../../gsap';

import { RootState, useAppSelector } from '../../redux/store';

import { UseAnimateLoaderReturnTypes } from './Loader.types';

const useAnimateLoader = (): UseAnimateLoaderReturnTypes => {
  const loaderRXS = useAppSelector((state: RootState) => state.loaderRXS);

  const loaderTL = React.useRef(gsap.timeline({ repeat: -1 }));
  const loaderRef = React.useRef<HTMLDivElement>(null);
  const dotsRef = React.useRef<HTMLDivElement[]>([]);
  const taglineRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    loaderTL.current
      .fromTo(
        dotsRef.current,
        { y: 0, autoAlpha: 0 },
        {
          delay: 0.1,
          duration: 0.68,
          stagger: 0.1,
          y: 20,
          autoAlpha: 1,
          ease: 'back.inOut',
        },
      )
      .to(dotsRef.current, {
        duration: 0.32,
        autoAlpha: 0,
        ease: 'back.inOut',
      });
  }, [loaderRXS]);

  return { loaderRef, dotsRef, taglineRef };
};

export default useAnimateLoader;
