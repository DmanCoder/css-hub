import { rehydrateSelectedNetwork } from './rehydrateSelectedNetwork';
import { rehydrateSelectedCountry } from './rehydrateSelectedCountry';

const appRehydrate = () => {
  rehydrateSelectedNetwork();
  rehydrateSelectedCountry();
};

export default appRehydrate;
