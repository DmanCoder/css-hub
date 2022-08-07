import { store } from '../redux/store';
import { LanguageCodeTypes } from '../typescriptGlobals/types';
import { setLanguageAXN } from '../redux/actions/languageActions/languageActions';

export const rehydrateSelectedLanguage = () => {
  const selectedLanguage: null | string = window.localStorage.getItem('selectedLanguage');

  if (typeof selectedLanguage === 'string') {
    const lang: LanguageCodeTypes = JSON.parse(selectedLanguage);
    store.dispatch(setLanguageAXN(lang));
  }
};
