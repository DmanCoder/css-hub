import isEmpty from './isEmpty';
import isMovie from './isMovie';
import truncateTxt from './truncateTxt';
import imagesLoaded from './imagesLoaded';
import debounce from './debounce';
import streamService from './streamService';
import { changeLanguage, translate } from './translate';
import instantScrollTo from './instantScrollTo';
import saveToLocalStorage from './saveToLocalStorage';
import networkIdToNetworkName from './networkIdToNetworkName';
import timeConverter from './timeConverter';
import randomNumberGenerator from './randomNumberGenerator';
import returnCountryCodeBasedOnLanguageCode from './returnCountryCodeBasedOnLanguageCode';

const utils = {
  isEmpty,
  imagesLoaded,
  truncateTxt,
  isMovie,
  debounce,
  streamService,
  translate,
  changeLanguage,
  instantScrollTo,
  saveToLocalStorage,
  networkIdToNetworkName,
  timeConverter,
  randomNumberGenerator,
  returnCountryCodeBasedOnLanguageCode,
};

export default utils;
