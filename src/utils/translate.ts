import i18n from 'i18next';

export const translate = (key: string) => i18n.t(key);

export const changeLanguage = (language: string) => i18n.changeLanguage(language);
