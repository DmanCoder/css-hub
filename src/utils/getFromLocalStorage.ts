import { LSKeyTypes, LSValueTypes } from '../typescriptGlobals/types';

type LSParamTypes = {
  key: LSKeyTypes;
  value: LSValueTypes;
};

const getFromLocalStorage = ({ key, value }: LSParamTypes): void =>
  window.localStorage.setItem(key, JSON.stringify(value));

export default getFromLocalStorage;
