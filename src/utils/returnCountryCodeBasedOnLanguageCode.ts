import { LanguageCodeTypes } from '../typescriptGlobals/types';

const returnCountryCodeBasedOnLanguageCode = (lang: LanguageCodeTypes): string => {
  switch (lang) {
    case 'en-US':
      return 'EN';
    case 'es-ES':
      return 'ES';
    case 'zh-TW':
      return 'ZH';
    case 'hi-IN':
      return 'HI';
    default:
      return '';
  }
};

export default returnCountryCodeBasedOnLanguageCode;
