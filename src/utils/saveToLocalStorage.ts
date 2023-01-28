import { Theme } from '../typescriptGlobals/types';

type LSValueTypes = Theme;

type LSKeyTypes = 'userTheme';

type LSParamTypes = {
  key: LSKeyTypes;
  value: LSValueTypes;
};

const saveToLocalStorage = ({ key, value }: LSParamTypes): void =>
  window.localStorage.setItem(key, JSON.stringify(value));

export default saveToLocalStorage;
