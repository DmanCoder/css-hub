import utils from '../../utils';
import { ExitLoadingTypes, LoadAllImagesTypes, StartDotsAnimationTypes } from './AppLoader.types';

export const onStartStaggeredDotsAnimation = ({
  initialLoaderTL,
  dotsRef,
  loaderToggle,
}: StartDotsAnimationTypes) => {
  initialLoaderTL.current
    .fromTo(
      dotsRef,
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
    .to(dotsRef, {
      duration: 0.32,
      autoAlpha: 0,
      ease: 'back.inOut',
      onStart: () => loaderToggle.setAppLoaderToggle(true),
      onComplete: () => loaderToggle.setAppLoaderToggle(false),
    });
};

export const onChangeBackgroundOfDotsAndExitLoadingAnimation = ({
  exitLoaderTL,
  dotsRef,
  loaderRef,
}: ExitLoadingTypes) => {
  exitLoaderTL.current
    .to(dotsRef, {
      backgroundColor: '#4a4a4a',
      ease: 'power1.in',
    })
    .to(dotsRef, {
      duration: 0.4,
      autoAlpha: 0,
      ease: 'power1.in',
    })
    .to(loaderRef, {
      duration: 0.65,
      autoAlpha: 0,
      ease: 'power1.in',
    })
    .to('body', {
      css: {
        overflow: 'auto',
      },
    });

  // exitLoaderTL.current
  // .to(dotsRef, {
  //   backgroundColor: '#4a4a4a',
  // })
  // .to(dotsRef, {
  //   duration: 0.45,
  //   autoAlpha: 0,
  // })
  // .to(taglineRef, {
  //   duration: 1,
  //   autoAlpha: 1,
  //   ease: 'none',
  // })
  // .to(taglineRef, {
  //   duration: 1,
  //   autoAlpha: 0,
  //   ease: 'none',
  // })
  // .fromTo(
  //   loaderRef,
  //   { delay: 3, autoAlpha: 1, scale: 1 },
  //   {
  //     delay: 3,
  //     duration: 0.47,
  //     autoAlpha: 0,
  //     ease: 'none',
  //   },
  // )
  // .to('body', {
  //   css: {
  //     overflow: 'auto',
  //   },
  // });
};

export const onLoadAllImages = ({ setHasLoadedImages }: LoadAllImagesTypes) => {
  const onComplete = () => setHasLoadedImages(true);
  utils.imagesLoaded({ attributeTarget: '.home-page-image', onComplete });
};
