import { LanguageCodeTypes } from '../typescriptGlobals/types';

const returnLanguageCodeShortHand = (lang: LanguageCodeTypes): string => {
  switch (lang) {
    case 'en-US':
      return 'EN';
    case 'es-CO':
      return 'ES';
    case 'zh-TW':
      return 'ZH';
    case 'hi':
      return 'HI';
    default:
      return '';
  }
};

export default returnLanguageCodeShortHand;
