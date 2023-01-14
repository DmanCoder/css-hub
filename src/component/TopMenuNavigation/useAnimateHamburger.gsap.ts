import React from 'react';
import { gsap } from '../../gsap';
import { UseAnimateHamburgerReturnTypes } from './TopMenuNavigation.types';

const useAnimateHamburger = (): UseAnimateHamburgerReturnTypes => {
  const countryTL = React.useRef(gsap.timeline({ paused: true }));

  const topHamburger = React.useRef<HTMLSpanElement>(null);
  const middleHamburger = React.useRef<HTMLSpanElement>(null);
  const bottomHamburger = React.useRef<HTMLSpanElement>(null);

  return { topHamburger, middleHamburger, bottomHamburger };
};

export default useAnimateHamburger;
