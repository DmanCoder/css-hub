import { rehydrateSelectedNetwork } from './rehydrateSelectedNetwork';
import { rehydrateSelectedCountry } from './rehydrateSelectedCountry';
import { rehydrateSelectedLanguage } from './rehydrateSelectedLanguage';

const appRehydrate = () => {
  rehydrateSelectedNetwork();
  rehydrateSelectedCountry();
  rehydrateSelectedLanguage();
};

export default appRehydrate;
