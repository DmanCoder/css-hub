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

  const onPageReset = () => window.location.reload();

  const onShowCountryList = () => {
    console.log('longpress is triggered');
    countryTL.current.play();
  };

  const onHideCountryList = () => {
    console.log('HIDE COUNTRYLIST');
    countryTL.current.reverse();
  };

  const onLongPress = useLongPress({ onPageReset, onShowCountryList });

  return {
    onToggleSideNetworkDisplay,
    navWrapperRef,
    onLongPress,
    onHideCountryList,
  };
};

export default useTopNavigation;
