import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootStore } from '../../redux/store';
import { UseTopNavigationReturnType } from './TopNavigation.types';
import useLongPress from './useLongPress';
import { gsap } from '../../gsap';

const useTopNavigation = (): UseTopNavigationReturnType => {
  const dispatch = useDispatch();
  const { isShowLeftNavigation } = useSelector((state: RootStore) => state.networkRXS);
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

  // Short Click
  const onPageReset = () => window.location.reload();

  // Long Press
  const onShowCountryList = () => {
    console.log('longpress is triggered');
    countryTL.current.play();
  };

  const onLongPress = useLongPress({ onPageReset, onShowCountryList });

  return {
    onToggleSideNetworkDisplay,
    navWrapperRef,
    onLongPress,
  };
};

export default useTopNavigation;
