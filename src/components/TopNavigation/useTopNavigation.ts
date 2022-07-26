import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootStore } from '../../redux/store';
import { UseTopNavigationReturnType } from './TopNavigation.types';
import useLongPress from './useLongPress';
import { gsap } from '../../gsap';
import { changeCountryAXN } from '../../redux/actions/countryActions/countryActions';
import { CountryAlpha2CodeTypes } from '../../typescriptGlobals/types';

const useTopNavigation = (): UseTopNavigationReturnType => {
  const dispatch = useDispatch();

  const { isShowLeftNavigation } = useSelector((state: RootStore) => state.networkRXS);
  const countryRXS = useSelector((state: RootStore) => state.countryRXS);
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
      console.log('OS TJOS ROWEM');
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
