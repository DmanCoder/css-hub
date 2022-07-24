import React from 'react';
import { gsap } from '../../gsap';
import { AdjustAppWrapperPaddingReturnType } from './App.types';

export const OnAddOrRemoveLeftPaddingWhenStreamingServicesIsToggledAnimation = ({
  isShowLeftNavigation,
}: AdjustAppWrapperPaddingReturnType): void => {
  const sectionsTL = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    if (isShowLeftNavigation) {
      const elementSections = gsap.utils.toArray('.network-padding');
      sectionsTL.current.to(elementSections, { css: { paddingLeft: '2.51rem' } });
    } else {
      sectionsTL.current.reverse();
    }
  }, [isShowLeftNavigation]);
};
