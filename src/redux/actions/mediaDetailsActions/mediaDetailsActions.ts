import { Dispatch } from 'redux';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { ActionTypes } from '..';

import {
  FetchDetailsParamsTypes,
  IMediaContentRatingAction,
  IMediaDetailsAction,
  IMediaDetailsImagesAction,
  IMediaDetailsRandomNumberAction,
  ISetMediaAverageColorAction,
} from './mediaDetailsActions.types';
import {
  MediaAverageColorTypes,
  MediaDetailsTypes,
  MediaTypes,
} from '../../../typescriptGlobals/types';
import utils from '../../../utils';

/**
 * @description Set backdrop average background color
 */
export const setAverageBackgroundColorAXN = (
  averageColor: MediaAverageColorTypes,
): ISetMediaAverageColorAction => {
  return {
    type: ActionTypes.SET_MEDIA_DETAILS_AVERAGE_COLOR,
    payload: averageColor,
  };
};

/**
 * @description Set backdrop image
 */
export const setBackdropImageAXN = (imgURL: string) => {
  return {
    type: ActionTypes.SET_BACKDROP_IMAGE,
    payload: imgURL,
  };
};

/**
 * @description Generate random number
 */
export const generateRandomNumberAXN =
  (media: MediaTypes[]) => (dispatch: Dispatch<IMediaDetailsRandomNumberAction>) => {
    const randomNumber = utils.randomNumberGenerator({ max: media.length - 1 });
    dispatch({
      type: ActionTypes.MEDIA_DETAILS_RANDOM_NUMBER,
      payload: randomNumber,
    });
  };

/**
 * @description Fetch details
 */
export const fetchDetailsMediaAXN =
  (currentMedia: FetchDetailsParamsTypes) => (dispatch: Dispatch<IMediaDetailsAction>) => {
    const language = store.getState().languageRXS;

    const params = `media_id=${currentMedia?.mediaId}&media_type=${currentMedia?.mediaType}&language=${language}&page=1`;
    const endPoint = `/api/details?${params}`;

    return dbAPI
      .get(endPoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_MEDIA_DETAILS,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

/**
 * @description Fetch media content rating for both tv/movie media
 */
export const fetchMediaDetailsContentRatings =
  (currentMedia: FetchDetailsParamsTypes) => (dispatch: Dispatch<IMediaContentRatingAction>) => {
    const language: string = store.getState().languageRXS;
    const params = `media_id=${currentMedia?.mediaId}&media_type=${currentMedia?.mediaType}&language=${language}&page=1`;

    const endPoint = `/api/details/media_ratings?${params}`;

    return dbAPI
      .get(endPoint)
      .then((res) => {
        dispatch({
          type: ActionTypes.GET_MEDIA_CONTENT_RATINGS,
          payload: res?.data?.results,
        });
      })
      .catch((err) => {
        console.log('ERROR...', err);
      });
  };

/**
 * @description Get Current media Images
 */
export const fetchMediaDetailsContentImages =
  (currentMedia: MediaDetailsTypes) => (dispatch: Dispatch<IMediaDetailsImagesAction>) => {
    const language: string = store.getState().languageRXS;
    const params = `tv_id=${currentMedia?.id}&season_number=${currentMedia?.number_of_seasons}&number_of_episodes=${currentMedia?.number_of_episodes}&language=${language}&page=1`;

    console.log(currentMedia, params);

    const endPoint = `/api/images/tv/seasons/episode_images?${params}`;

    return dbAPI
      .get(endPoint)
      .then((res) => {
        console.log(res, 'resresresresresresres');
        dispatch({
          type: ActionTypes.MEDIA_DETAILS_IMAGES,
          payload: res?.data,
        });
      })
      .catch((err) => {
        console.log('ERROR...', err);
      });
  };
