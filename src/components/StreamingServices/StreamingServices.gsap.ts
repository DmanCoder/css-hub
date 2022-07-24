import { gsap } from '../../gsap';

import { StreamingServiceAnimationParamTypes } from './StreamingServices.types';

export const onToggleNetworkAnimation = ({
  streamingServicesWrapper,
  isShowLeftNavigation,
}: StreamingServiceAnimationParamTypes) => {
  const streamTL = gsap.timeline();

  if (isShowLeftNavigation) {
    streamTL.to(streamingServicesWrapper.current, {
      duration: 0.4,
      ease: 'power1.out',
      autoAlpha: 1,
      css: { left: 0 },
    });
  } else {
    streamTL.to(streamingServicesWrapper.current, {
      duration: 0.6,
      autoAlpha: 0,
      ease: 'power1.out',
      css: { left: '-5.2rem' },
    });
  }
};
