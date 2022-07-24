import React from 'react';
import { useSelector } from 'react-redux';

import { RootStore } from '../../redux/store';

import {
  onChangeBackgroundOfDotsAndExitLoadingAnimation,
  onLoadAllImages,
  onStartStaggeredDotsAnimation,
} from './AppLoader.gsap';

import { gsap } from '../../gsap';
import utils from '../../utils';

const useAppLoader = () => {
  const { streams } = useSelector((state: RootStore) => state.popularRXS);
  const mediaDetails = useSelector((state: RootStore) => state.detailsRXS);

  const [appLoaderToggle, setAppLoaderToggle] = React.useState<boolean>(false);
  const [hasLoadedImages, setHasLoadedImages] = React.useState<boolean>(false);

  const loaderRef = React.useRef<HTMLDivElement>(null);
  const dotsRef = React.useRef<HTMLDivElement[]>([]);
  const taglineRef = React.useRef<HTMLSpanElement>(null);
  const initialLoaderTL = React.useRef(gsap.timeline({ repeat: -1 }));
  const exitLoaderTL = React.useRef(gsap.timeline());

  React.useEffect(() => {
    onStartStaggeredDotsAnimation({
      initialLoaderTL,
      dotsRef: dotsRef.current,
      loaderToggle: {
        appLoaderToggle,
        setAppLoaderToggle,
      },
    });
  }, []);

  React.useEffect(() => {
    if (!utils.isEmpty(streams)) {
      onLoadAllImages({ setHasLoadedImages });
    }
  }, [streams]);

  React.useEffect(() => {
    if (hasLoadedImages && appLoaderToggle) {
      initialLoaderTL.current.kill();

      onChangeBackgroundOfDotsAndExitLoadingAnimation({
        exitLoaderTL,
        dotsRef: dotsRef.current,
        loaderRef: loaderRef.current,
        taglineRef: taglineRef.current,
      });
    }
  }, [hasLoadedImages, appLoaderToggle]);

  return { loaderRef, dotsRef, taglineRef, mediaDetails };
};

export default useAppLoader;
