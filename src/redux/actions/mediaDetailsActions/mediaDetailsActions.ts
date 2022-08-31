import { Dispatch } from 'redux';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { ActionTypes } from '..';

import { IMediaDetailsAction, IMediaDetailsRandomNumberAction } from './mediaDetailsActions.types';
import { MediaDetailsTypes, MediaTypes } from '../../../typescriptGlobals/types';
import { IMediaStreamsAction } from '../mediaActions/mediaActions.types';
import utils from '../../../utils';

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
  (media: MediaTypes[]) => (dispatch: Dispatch<IMediaDetailsAction>) => {
    const language = store.getState().languageRXS;
    const { indexPosition } = store.getState().detailsRXS;

    const currentMedia: MediaTypes = media[indexPosition] ?? {};

    const params = `media_id=${currentMedia?.id}&media_type=${currentMedia?.appended_media_type}&language=${language}&page=1`;
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
