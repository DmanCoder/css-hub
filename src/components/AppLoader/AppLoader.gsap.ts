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
  currentMedia,
  exitLoaderTL,
  dotsRef,
  loaderRef,
  taglineRef,
}: ExitLoadingTypes) => {
  if (!utils.isEmpty(currentMedia?.tagline)) {
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
      .to(taglineRef, {
        duration: 0.4,
        autoAlpha: 1,
        ease: 'power1.in',
      })
      .to(taglineRef, {
        delay: 2,
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
  } else {
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
  }
};

export const onLoadAllImages = ({ setHasLoadedImages }: LoadAllImagesTypes) => {
  const onComplete = () => setHasLoadedImages(true);
  utils.imagesLoaded({ attributeTarget: '.home-page-image', onComplete });
};
