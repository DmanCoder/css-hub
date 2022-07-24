import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootStore } from '../../redux/store';
import { UseTopNavigationReturnType } from './TopNavigation.types';

const useTopNavigation = (): UseTopNavigationReturnType => {
  const dispatch = useDispatch();
  const { isShowLeftNavigation } = useSelector((state: RootStore) => state.networkRXS);
  const navWrapperRef = React.useRef<HTMLUListElement>(null);

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

  return { onToggleSideNetworkDisplay, navWrapperRef, onPageReset };
};

export default useTopNavigation;
