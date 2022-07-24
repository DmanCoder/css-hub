import {
  APPLE_TV_NETWORK_ID,
  DISNEY_NETWORK_ID,
  HBO_MAX_NETWORK_ID,
  NETFLIX_NETWORK_ID,
  PRIME_VIDEOS_NETWORK_ID,
  SHUFFLE_NETWORK_ID,
} from '../typescriptGlobals/constants';
import { NetworkIdTypes, NetworkNameTypes } from '../typescriptGlobals/types';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const networkIdToNetworkName = (networkId: NetworkIdTypes): NetworkNameTypes => {
  switch (networkId) {
    case APPLE_TV_NETWORK_ID:
      return 'Apple Tv+';
    case PRIME_VIDEOS_NETWORK_ID:
      return 'Prime Videos';
    case DISNEY_NETWORK_ID:
      return 'Disney+';
    case NETFLIX_NETWORK_ID:
      return 'Netflix';
    case HBO_MAX_NETWORK_ID:
      return 'HBO MAX';
    case SHUFFLE_NETWORK_ID:
      return 'Shuffle';
    default:
      return 'Netflix';
  }
};

export default networkIdToNetworkName;
