import Assets from '../assets';
import { LogoTypes } from '../assets/assets.types';
import { HBO_MAX_NETWORK_ID, NETFLIX_NETWORK_ID } from '../typescriptGlobals/constants';
import { NetworkIdTypes } from '../typescriptGlobals/types';

type ReturnTypes = {
  name: string;
  Logo:
    | LogoTypes['Netflix']
    | LogoTypes['Disney']
    | LogoTypes['PrimeVideos']
    | LogoTypes['AppleTV']
    | LogoTypes['HBOMax'];
};

const returnTheAppropriateNetworkData = (
  networkId: NetworkIdTypes = HBO_MAX_NETWORK_ID,
): ReturnTypes => {
  switch (networkId) {
    case NETFLIX_NETWORK_ID:
      return {
        name: 'Netflix',
        Logo: Assets.Logos.Netflix,
      };
    default:
      return {
        name: 'HBO MAX',
        Logo: Assets.Logos.HBOMax,
      };
  }
};

export default returnTheAppropriateNetworkData;
