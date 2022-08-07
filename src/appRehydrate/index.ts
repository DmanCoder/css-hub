import { rehydrateSelectedNetwork } from './rehydrateSelectedNetwork';
import { rehydrateSelectedCountry } from './rehydrateSelectedCountry';
import { rehydrateSelectedLanguage } from './rehydrateSelectedLanguage';

const appRehydrate = () => {
  rehydrateSelectedLanguage();
  rehydrateSelectedNetwork();
  rehydrateSelectedCountry();
};

export default appRehydrate;
