import { rehydrateSelectedNetwork } from './rehydrateSelectedNetwork';
import { rehydrateSelectedCountry } from './rehydrateSelectedCountry';

const appRehydrate = () => {
  rehydrateSelectedCountry();
  rehydrateSelectedNetwork();
};

export default appRehydrate;
