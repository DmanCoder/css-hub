import { SelectedNetworkTypes } from '../typescriptGlobals/types';

type ValueTypes = SelectedNetworkTypes;

type LSParamTypes = {
  key: string;
  value: ValueTypes;
};

const saveToLocalStorage = ({ key, value }: LSParamTypes): void =>
  window.localStorage.setItem(key, JSON.stringify(value));

export default saveToLocalStorage;
