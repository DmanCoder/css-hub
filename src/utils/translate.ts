import i18n from '../i18next';

import { LanguageCodeTypes } from '../typescriptGlobals/types';

export const translate = (key: string) => i18n.t(key);

export const changeLanguage = (language: LanguageCodeTypes) => i18n.changeLanguage(language);
