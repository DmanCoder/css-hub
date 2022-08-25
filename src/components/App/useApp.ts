import React from 'react';

import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import {
  fetchPopularStreamsAndCurrentMediaDetails,
  // fetchAnimationsMediaAXN,
  // fetchPopularStreamsAXN,
  // fetchAnimeMediaAXN,
  // fetchKidsMediaAXN,
  // fetchNewGenreAXN,
  // fetchTrendingMediaAXN,
  // fetchUpcomingMediaAXN,
} from '../../redux/actions/popularActions/popularActions';
import {
  fetchActionAndAdventureMediaAXN,
  fetchAnimationsMediaAXN,
  fetchComedyMediaAXN,
} from '../../redux/actions/mediaActions/mediaActions';

import { updateWindowDimensionAXN } from '../../redux/actions/windowDimension/windowDimensionAction';

import { gsap } from '../../gsap';
import utils from '../../utils';

import { UseAppReturnType } from './App.types';

// TODO: MY LIST+ SHUFFLE MODE SHOULD HAVE ALL MEDIA FROM ALL NETWORKS | BUT IF NOT ON SHUFFLE MODE THEN... ONLY SHOW THE MY LIST FOR ONLY THE SELECTED NETWORK

const useApp = (): UseAppReturnType => {
  const dispatch = useAppDispatch();

  const { isShowLeftNavigation } = useAppSelector((state: RootState) => state.networkRXS);
  const appWrapper = React.useRef<HTMLDivElement>(null);
  const sectionsTL = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    const elementSections = gsap.utils.toArray('.network-padding');
    sectionsTL.current.to(elementSections, {
      duration: 0.4,
      ease: 'power1.out',
      css: { paddingLeft: '4rem' },
    });
  }, []);

  React.useEffect(() => {
    if (isShowLeftNavigation) {
      sectionsTL.current.play();
    } else {
      sectionsTL.current.reverse();
    }
  }, [isShowLeftNavigation]);

  React.useEffect(() => {
    dispatch(fetchPopularStreamsAndCurrentMediaDetails());

    // NEW MEDIA FETCH
    dispatch(fetchAnimationsMediaAXN());
    dispatch(fetchComedyMediaAXN());
    dispatch(fetchActionAndAdventureMediaAXN());
    // dispatch(fetchPopularStreamsAXN());
    // dispatch(fetchAnimationsMediaAXN());
    // dispatch(fetchAnimeMediaAXN());
    // dispatch(fetchKidsMediaAXN());
    // dispatch(fetchTrendingMediaAXN());
    // dispatch(fetchUpcomingMediaAXN());
    // dispatch(fetchNewGenreAXN());
  }, []);

  React.useEffect(() => {
    dispatch(
      updateWindowDimensionAXN({
        height: window.innerHeight,
        width: window.innerWidth,
      }),
    );
  }, []);

  React.useEffect(() => {
    const debouncedHandleResize = utils.debounce(function handleResize() {
      // Get view port height and multipy by `1%` to convert to `vh` unit
      const vh: number = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);

      dispatch(
        updateWindowDimensionAXN({
          height: window.innerHeight,
          width: window.innerWidth,
        }),
      );
    }, 1000);

    window.addEventListener('resize', debouncedHandleResize);
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  /*
   * TODO ADD MULTIPLE TABS: https://www.themoviedb.org/talk/6002a239223e20003fb6e10b
   * POPULAR STREAMING TITLES: https://api.themoviedb.org/3/discover/movie?api_key=###&watch_region=US&with_watch_monetization_types=flatrate
   * POPULAR TITLES FOR REND: https://api.themoviedb.org/3/discover/movie?api_key=###&watch_region=US&with_watch_monetization_types=rent
   * POPULAR MOVIES IN THEATERS: https://api.themoviedb.org/3/discover/movie?api_key=###&region=US&with_release_type=3|2
   */

  return { isShowLeftNavigation, appWrapper };
};

export default useApp;
