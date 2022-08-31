import { Dispatch } from 'redux';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { ActionTypes } from '..';
// import { loadingToggleAXN } from '../loadingActions/loadingActions';

import {
  IContentRatingsForTvShows,
  IMediaDetails,
  IMediaDetailsRandomNumberAction,
} from './mediaDetailsActions.types';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
import { ILoadingToggle } from '../loadingActions/loadingActions.types';
import { ContentRatingsForTvShows, MediaDetails } from '../popularActions/popularActions.types';
import {
  CombinedMediaTypes,
  MediaMovieTypes,
  MediaTvTypes,
} from '../../../typescriptGlobals/types';
import utils from '../../../utils';
import { IMediaStreamsAction } from '../mediaActions/mediaActions.types';

/**
 * @description Generate random number
 */
export const generateRandomNumberAXN =
  (media: CombinedMediaTypes[]) => (dispatch: Dispatch<IMediaDetailsRandomNumberAction>) => {
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
  (media: CombinedMediaTypes[]) =>
  (dispatch: Dispatch<IMediaStreamsAction | IMediaDetailsRandomNumberAction>) => {
    const language = store.getState().languageRXS;
    const { indexPosition } = store.getState().detailsRXS;

    const currentMedia: MediaMovieTypes | MediaTvTypes = media[indexPosition] ?? {};

    const params = `media_id=${currentMedia?.id}&media_type=${currentMedia?.appended_media_type}&language=${language}&page=1`;
    const endPoint = `/api/details?${params}`;

    return dbAPI
      .get(endPoint)
      .then((response) => {
        console.log(response, 'responseresponseresponse');
        // dispatch({
        //   type: ActionTypes.GET_MEDIA_STREAMS,
        //   payload: response.data.results,
        // });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

// export const getCurrentMediaDetails =
//   ({ id, media_type }: { id: number; media_type: string }) =>
//   (dispatch: Dispatch<IMediaDetails | IErrorFeedback | ILoadingToggle>) => {
//     const language: string = store.getState().languageRXS;
//     const params = `media_id=${id}&media_type=${media_type}&language=${language}&page=1`;
//     const endPoint = `/api/details?${params}`;

//     return dbAPI
//       .get(endPoint)
//       .then((res) => {
//         const results: MediaDetails = res?.data?.results;

//         dispatch({
//           type: ActionTypes.GET_CURRENT_MEDIA_DETAILS,
//           payload: results,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: ActionTypes.ERROR_FEEDBACK,
//           payload: {
//             api: 'Could not connect to servers',
//             err,
//           },
//         });
//       });
//   };

// export const getCurrentContentRatingsForTvShows =
//   ({ id, media_type }: { id: number; media_type: string }) =>
//   (dispatch: Dispatch<IContentRatingsForTvShows | IErrorFeedback | ILoadingToggle>) => {
//     const language: string = store.getState().languageRXS;
//     const params = `media_id=${id}&media_type=${media_type}&language=${language}&page=1`;

//     const endPoint = `/api/details/media_ratings?${params}`;

//     return dbAPI
//       .get(endPoint)
//       .then((res) => {
//         const results: ContentRatingsForTvShows[] = res?.data?.results;

//         dispatch({
//           type: ActionTypes.GET_MEDIA_CONTENT_RATINGS,
//           payload: results,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: ActionTypes.ERROR_FEEDBACK,
//           payload: {
//             api: 'Could not connect to servers',
//             err,
//           },
//         });
//       });
//   };
