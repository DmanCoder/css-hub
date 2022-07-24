import { ActionTypes } from '..';
import {
  APPLE_TV_NETWORK_ID,
  DISNEY_NETWORK_ID,
  HBO_MAX_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from '../../../typescriptGlobals/constants';
import { NetworkNameTypes } from '../../../typescriptGlobals/types';
import utils from '../../../utils';
import {
  INetworkMode,
  IToggleLeftNavigation,
  ToggleLeftSideNavParamType,
} from './streamingServicesActions.types';

export const switchBetweenPopularStreamingNetworksAXN = (
  network: NetworkNameTypes,
): INetworkMode => {
  switch (network) {
    case 'Netflix':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: NETFLIX_NETWORK_ID,
          networkName: 'Netflix',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: NETFLIX_NETWORK_ID,
      };
    case 'Disney+':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: DISNEY_NETWORK_ID,
          networkName: 'Disney+',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: DISNEY_NETWORK_ID,
      };
    case 'Prime Videos':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: PRIME_VIDEOS_NETWORK_ID,
          networkName: 'Prime Videos',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: PRIME_VIDEOS_NETWORK_ID,
      };
    case 'Apple Tv+':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: APPLE_TV_NETWORK_ID,
          networkName: 'Apple Tv+',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: APPLE_TV_NETWORK_ID,
      };
    case 'HBO MAX':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: HBO_MAX_NETWORK_ID,
          networkName: 'HBO MAX',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: HBO_MAX_NETWORK_ID,
      };
    case 'Shuffle':
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: SHUFFLE_NETWORK_ID,
          networkName: 'Shuffle',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: SHUFFLE_NETWORK_ID,
      };
    default:
      utils.saveToLocalStorage({
        key: 'selectedNetwork',
        value: {
          networkId: NETFLIX_NETWORK_ID,
          networkName: 'HBO MAX',
        },
      });
      return {
        type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID,
        payload: NETFLIX_NETWORK_ID,
      };
  }
};

export const toggleLeftSideNavigationToShowAvailableStreamingServicesAXN = ({
  boolean,
}: ToggleLeftSideNavParamType): IToggleLeftNavigation => {
  return {
    type: ActionTypes.TOGGLE_LEFT_NAVIGATION,
    payload: boolean,
  };
};
