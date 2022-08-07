import { ActionTypes } from '..';
import { LanguageCodeTypes } from '../../../typescriptGlobals/types';

export const setLanguageAXN = (lang: LanguageCodeTypes) => {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: lang,
  };
};
