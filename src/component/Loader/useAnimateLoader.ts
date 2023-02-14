import React from 'react';

import { gsap } from '../../gsap';
import { loaderProgressToggleAXN } from '../../redux/actions/loaderActions/loaderActions';

import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';

import { UseAnimateLoaderReturnTypes } from './Loader.types';

const useAnimateLoader = (): UseAnimateLoaderReturnTypes => {
  const dispatch = useAppDispatch();
  const { isLoaderDoneAnimating, isAppLoading } = useAppSelector(
    (state: RootState) => state.loaderRXS,
  );

  const loaderTL = React.useRef(gsap.timeline({ repeat: -1, paused: true }));
  const exitLoaderTL = React.useRef(gsap.timeline());
  const loaderRef = React.useRef<HTMLDivElement>(null);
  const dotsRef = React.useRef<HTMLDivElement[]>([]);
  const taglineRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    onStateStaggeredAnimation();
  }, []);

  React.useEffect(() => {
    if (isAppLoading) {
      loaderTL.current.play();
    }

    if (isLoaderDoneAnimating === true && !isAppLoading) {
      loaderTL.current.pause();
      onColorDotsAndExitAppLoaderAnimation();
      dispatch(loaderProgressToggleAXN(null)); // Set back to default
    }
  }, [isAppLoading, isLoaderDoneAnimating]);

  const onStateStaggeredAnimation = () => {
    // Creates staggered animation
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
          onStart: () => {
            dispatch(loaderProgressToggleAXN(false));
          },
        },
      )
      .to(dotsRef.current, {
        duration: 0.45,
        autoAlpha: 0,
        ease: 'back.inOut',
        onStart: () => {
          // Since we pause right before the dots are colored and animation is exited
          // This is called here instead of `onComplete`
          dispatch(loaderProgressToggleAXN(true));
        },
      });
  };

  const onColorDotsAndExitAppLoaderAnimation = () => {
    exitLoaderTL.current
      .to(dotsRef.current, {
        duration: 0.8,
        backgroundColor: '#7C7C85',
        ease: 'power1.in',
      })
      .to(dotsRef.current, {
        duration: 1,
        autoAlpha: 0,
        ease: 'power1.in',
      })
      .to(loaderRef.current, {
        duration: 0.65,
        autoAlpha: 0,
        ease: 'power1.in',
      });
  };

  return { loaderRef, dotsRef, taglineRef };
};

export default useAnimateLoader;
