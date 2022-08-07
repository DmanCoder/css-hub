import { ActionTypes } from '..';
import { LanguageCodeTypes } from '../../../typescriptGlobals/types';
import utils from '../../../utils';

export const setLanguageAXN = (lang: LanguageCodeTypes) => {
  utils.saveToLocalStorage({
    key: 'selectedNetwork',
    value: lang,
  });

  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: lang,
  };
};
