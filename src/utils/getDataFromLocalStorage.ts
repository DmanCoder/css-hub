import { LSKeyTypes } from '../typescriptGlobals/types';

type LSParamTypes = {
  key: LSKeyTypes;
};

const getDataFromLocalStorage = ({ key }: LSParamTypes): string | null => {
  return window.localStorage.getItem(key);
};

export default getDataFromLocalStorage;
