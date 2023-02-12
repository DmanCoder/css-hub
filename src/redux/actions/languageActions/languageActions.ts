import { ActionTypes } from '..';
import { LanguageCodeTypes } from '../../../typescriptGlobals/types';
// import utils from '../../../utils';
import { ILanguage } from './languageActions.types';

export const setLanguageAXN = (lang: LanguageCodeTypes): ILanguage => {
  // utils.changeLanguage(lang);

  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: lang,
  };
};
