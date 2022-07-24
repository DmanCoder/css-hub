import { gsap } from '../../gsap';
import { OnSwitchBottomTabSliderAnimationParamType } from './Gallery.types';

export const onSwitchBottomTabSliderAnimation = ({
  event,
  section,
}: OnSwitchBottomTabSliderAnimationParamType) => {
  const target = event.target;
  const parentPos = target.parentElement.getBoundingClientRect();
  const targetPos = target.getBoundingClientRect();

  const offset = parentPos.x - targetPos.x;

  gsap.to(`#${section}-active`, {
    duration: 0.45,
    ease: 'expo.out',
    css: { left: -offset },
  });
};
