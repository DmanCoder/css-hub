import React from 'react';
import { gsap } from '../../gsap';
import { UseAnimateHamburgerReturnTypes } from './TopMenuNavigation.types';

const useAnimateHamburger = (): UseAnimateHamburgerReturnTypes => {
  const hamburgerTL = React.useRef(gsap.timeline({ paused: true }));
  const [isHamburger, setIsHamburger] = React.useState<boolean>(false);

  const burgerTopRef = React.useRef<HTMLSpanElement>(null);
  const burgerMidRef = React.useRef<HTMLSpanElement>(null);
  const burgerBotRef = React.useRef<HTMLSpanElement>(null);
  const mobileRightNavigationRef = React.useRef<HTMLDivElement>(null);
  const mobileListItemsRef = React.useRef<HTMLLIElement[]>([]);
  const overlayRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    hamburgerTL.current
      .to(burgerTopRef.current, {
        duration: 0.5,
        y: '0.5rem',
        yoyo: true,
        ease: 'power1.inOut',
      })
      .to(
        burgerBotRef.current,
        {
          duration: 0.5,
          y: '-0.5rem',
          yoyo: true,
          ease: 'power1.inOut',
        },
        '-=0.5',
      )
      .to(burgerTopRef.current, {
        duration: 0.1,
        css: {
          height: '0',
        },
      })
      .to(burgerTopRef.current, { duration: 0.7, rotation: -45 })
      .to(burgerMidRef.current, { duration: 0.7, rotation: -45 }, '-=0.7')
      .to(burgerBotRef.current, { duration: 0.7, rotation: -135 }, '-=0.7')
      .to(
        [burgerTopRef.current, burgerMidRef.current, burgerBotRef.current],
        { duration: 0.1, ease: 'power1.out' },
        '-=0.7',
      )
      .to(
        mobileRightNavigationRef.current,
        {
          delay: -0.6,
          duration: 1,
          right: 0,
          ease: 'power2.out',
        },
        'some-label',
      )
      .to(
        overlayRef.current,
        {
          duration: 1.25,
          delay: -0.6,
          autoAlpha: 1,
          display: 'block',
          ease: 'power2.out',
        },
        'some-label',
      );
  }, []);

  React.useEffect(() => {
    if (isHamburger) {
      hamburgerTL.current.play();
    } else {
      hamburgerTL.current.reverse();
    }
  }, [isHamburger]);

  const onHandleToggleHamburger = () => setIsHamburger(!isHamburger);

  return {
    burgerTopRef,
    burgerMidRef,
    burgerBotRef,
    mobileRightNavigationRef,
    mobileListItemsRef,
    overlayRef,
    onHandleToggleHamburger,
  };
};

export default useAnimateHamburger;
