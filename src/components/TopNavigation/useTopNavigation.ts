import React from 'react';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { UseTopNavigationReturnType } from './TopNavigation.types';
import useLongPress from './useLongPress';
import { gsap } from '../../gsap';
import { CountryAlpha2CodeTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';

const useTopNavigation = (): UseTopNavigationReturnType => {
  const dispatch = useAppDispatch();

  const { isShowLeftNavigation } = useAppSelector((state: RootState) => state.networkRXS);
  const countryRXS = useAppSelector((state: RootState) => state.countryRXS);
  const navWrapperRef = React.useRef<HTMLUListElement>(null);
  const countryTL = React.useRef(gsap.timeline({ paused: true }));
  const languageTL = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    countryTL.current
      .to('.country-list', {
        ease: 'power1.out',
        css: { display: 'block' },
      })
      .to(
        '.country-list-item',
        {
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            top: 0,
          },
        },
        'drop',
      )
      .to(
        '.country-list-item',
        {
          delay: 0.25,
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            opacity: 1,
          },
        },
        'drop',
      );
  }, []);

  React.useEffect(() => {
    languageTL.current
      .to('.language-list', {
        ease: 'power1.out',
        css: { display: 'block' },
      })
      .to(
        '.language-list-item',
        {
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            top: 0,
          },
        },
        'drop',
      )
      .to(
        '.language-list-item',
        {
          delay: 0.25,
          duration: 0.75,
          ease: 'back.out',
          stagger: { amount: 0.25, from: 'start' },
          css: {
            opacity: 1,
          },
        },
        'drop',
      );
  }, []);

  const onToggleSideNetworkDisplay = () => {
    dispatch(
      toggleLeftSideNavigationToShowAvailableStreamingServicesAXN({
        boolean: !isShowLeftNavigation,
      }),
    );
  };

  const onPageReset = () => {
    window.location.reload();
  };

  const onShowCountryList = () => {
    countryTL.current.play();
  };

  const onHideCountryList = () => {
    countryTL.current.reverse();
  };

  const onShowLanguageList = () => {
    console.log('THIS IS RUNNIGN');
    languageTL.current.play();
  };

  const onHideLanguageList = () => {
    languageTL.current.reverse();
  };

  const onLongPress = useLongPress({ onPageReset, onShowCountryList });

  const onChangeCountry = (country: CountryAlpha2CodeTypes) => {
    return () => {
      switch (country) {
        case 'GB':
          utils.saveToLocalStorage({
            key: 'selectedCountry',
            value: {
              name: 'United Kingdom Flag',
              fileName: 'united-kingdom.png',
              iso: 'GB',
            },
          });
          break;
        case 'CA':
          utils.saveToLocalStorage({
            key: 'selectedCountry',
            value: {
              name: 'Canada Flag',
              fileName: 'canada.png',
              iso: 'CA',
            },
          });
          break;
        case 'US':
          utils.saveToLocalStorage({
            key: 'selectedCountry',
            value: {
              name: 'United States Flag',
              fileName: 'united-states.png',
              iso: 'US',
            },
          });
          break;
        case 'AU':
          utils.saveToLocalStorage({
            key: 'selectedCountry',
            value: {
              name: 'Australia Flag',
              fileName: 'australia.png',
              iso: 'AU',
            },
          });
          break;
        default:
          break;
      }
    };
  };

  return {
    onToggleSideNetworkDisplay,
    navWrapperRef,
    onLongPress,
    onHideCountryList,
    countryRXS,
    onChangeCountry,
    onShowLanguageList,
    onHideLanguageList,
  };
};

export default useTopNavigation;
