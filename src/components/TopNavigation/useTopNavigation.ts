import React from 'react';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootStore, useAppDispatch, useAppSelector } from '../../redux/store';
import { UseTopNavigationReturnType } from './TopNavigation.types';
import useLongPress from './useLongPress';
import { gsap } from '../../gsap';
import { changeCountryAXN } from '../../redux/actions/countryActions/countryActions';
import { CountryAlpha2CodeTypes } from '../../typescriptGlobals/types';

const useTopNavigation = (): UseTopNavigationReturnType => {
  const dispatch = useAppDispatch();

  const { isShowLeftNavigation } = useAppSelector((state: RootStore) => state.networkRXS);
  const countryRXS = useAppSelector((state: RootStore) => state.countryRXS);
  const navWrapperRef = React.useRef<HTMLUListElement>(null);
  const countryTL = React.useRef(gsap.timeline({ paused: true }));

  React.useEffect(() => {
    countryTL.current.to('.country-list', {
      ease: 'power1.out',
      css: { display: 'block' },
    });
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

  const onLongPress = useLongPress({ onPageReset, onShowCountryList });

  const onChangeCountry = (country: CountryAlpha2CodeTypes) => {
    return () => {
      dispatch(changeCountryAXN(country));
    };
  };

  return {
    onToggleSideNetworkDisplay,
    navWrapperRef,
    onLongPress,
    onHideCountryList,
    countryRXS,
    onChangeCountry,
  };
};

export default useTopNavigation;
