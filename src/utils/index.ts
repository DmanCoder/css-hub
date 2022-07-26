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
import returnLanguageCodeShortHand from './returnLanguageCodeShortHand';
import removeSpaceFromString from './removeSpaceFromString';
import imageError from './imageError';
import getAverageColor from './getAverageColor';
import getMediaTypeFromUrlPath from './getMediaTypeFromUrlPath';
import getMediaRatings from './getMediaRatings';
import getMediaDetails from './getMediaDetails';
import difference from './difference';

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
  returnLanguageCodeShortHand,
  removeSpaceFromString,
  imageError,
  getAverageColor,
  getMediaTypeFromUrlPath,
  getMediaRatings,
  getMediaDetails,
  difference,
};

export default utils;
