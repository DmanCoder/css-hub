import React from 'react';
import { toggleLeftSideNavigationToShowAvailableStreamingServicesAXN } from '../../redux/actions/streamingServicesActions/streamingServicesActions';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import {
  APPLE_TV_NETWORK_ID,
  DISNEY_NETWORK_ID,
  HBO_MAX_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from '../../typescriptGlobals/constants';
import { NetworkNameTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import { onToggleNetworkAnimation } from './StreamingServices.gsap';
import { UseStreamingServicesReturnTypes } from './StreamingServices.types';

const useStreamingServices = (): UseStreamingServicesReturnTypes => {
  const dispatch = useAppDispatch();

  const streamingServicesWrapper = React.useRef<HTMLDivElement>(null);
  const streamingServicesRef = React.useRef<HTMLDivElement[]>([]);
  const { isShowLeftNavigation, networkId } = useAppSelector(
    (state: RootState) => state.networkRXS,
  );

  React.useEffect(() => {
    onToggleNetworkAnimation({
      streamingServicesWrapper,
      streamingServicesRef,
      isShowLeftNavigation,
    });
  }, [isShowLeftNavigation]);

  const onToggleSideNetworkDisplay = () => {
    dispatch(
      toggleLeftSideNavigationToShowAvailableStreamingServicesAXN({
        boolean: !isShowLeftNavigation,
      }),
    );
  };

  const onChangeSiteToSelectedNetwork = (network: NetworkNameTypes) => {
    return () => {
      switch (network) {
        case 'Netflix':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: NETFLIX_NETWORK_ID,
              networkName: 'Netflix',
            },
          });
          location.reload();
          break;
        case 'Disney+':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: DISNEY_NETWORK_ID,
              networkName: 'Disney+',
            },
          });
          location.reload();
          break;
        case 'Prime Videos':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: PRIME_VIDEOS_NETWORK_ID,
              networkName: 'Prime Videos',
            },
          });
          location.reload();
          break;
        case 'Apple Tv+':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: APPLE_TV_NETWORK_ID,
              networkName: 'Apple Tv+',
            },
          });
          location.reload();
          break;
        case 'HBO MAX':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: HBO_MAX_NETWORK_ID,
              networkName: 'HBO MAX',
            },
          });
          location.reload();
          break;
        case 'Shuffle':
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: SHUFFLE_NETWORK_ID,
              networkName: 'Shuffle',
            },
          });
          location.reload();
          break;
        default:
          utils.saveToLocalStorage({
            key: 'selectedNetwork',
            value: {
              networkId: NETFLIX_NETWORK_ID,
              networkName: 'Netflix',
            },
          });
          location.reload();
          break;
      }
    };
  };

  return {
    streamingServicesRef,
    streamingServicesWrapper,
    onToggleSideNetworkDisplay,
    onChangeSiteToSelectedNetwork,
    networkId,
  };
};

export default useStreamingServices;
