import { ActionTypes } from '..';
import { LanguageCodeTypes } from '../../../typescriptGlobals/types';
import { ILanguage } from './languageActions.types';

export const setLanguageAXN = (lang: LanguageCodeTypes): ILanguage => {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: lang,
  };
};
