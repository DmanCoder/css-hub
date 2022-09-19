import { RoutePathNamesTypes } from '../routes/routes.types';
import {
  CountryFlagTypes,
  LanguageCodeTypes,
  SelectedNetworkTypes,
} from '../typescriptGlobals/types';

type ValueTypes = SelectedNetworkTypes | CountryFlagTypes | LanguageCodeTypes | RoutePathNamesTypes;

type LSParamTypes = {
  key: string;
  value: ValueTypes;
};

const saveToLocalStorage = ({ key, value }: LSParamTypes): void =>
  window.localStorage.setItem(key, JSON.stringify(value));

export default saveToLocalStorage;
