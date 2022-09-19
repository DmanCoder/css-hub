import { RoutePathNamesTypes } from '../routes/routes.types';
import {
  CountryFlagTypes,
  LanguageCodeTypes,
  SelectedNetworkTypes,
} from '../typescriptGlobals/types';

type LSValueTypes =
  | SelectedNetworkTypes
  | CountryFlagTypes
  | LanguageCodeTypes
  | RoutePathNamesTypes;

type LSKeyTypes = 'selectedNetwork' | 'selectedLanguage' | 'routePath' | 'selectedCountry';

type LSParamTypes = {
  key: LSKeyTypes;
  value: LSValueTypes;
};

const saveToLocalStorage = ({ key, value }: LSParamTypes): void =>
  window.localStorage.setItem(key, JSON.stringify(value));

export default saveToLocalStorage;
