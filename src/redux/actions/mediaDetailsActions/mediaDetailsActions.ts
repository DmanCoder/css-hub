import { Dispatch } from 'redux';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { ActionTypes } from '..';
// import { loadingToggleAXN } from '../loadingActions/loadingActions';

import { IContentRatingsForTvShows, IMediaDetails } from './mediaDetailsActions.types';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
import { ILoadingToggle } from '../loadingActions/loadingActions.types';
import { ContentRatingsForTvShows, MediaDetails } from '../popularActions/popularActions.types';

export const getCurrentMediaDetails =
  ({ id, appended_media_type }: { id: number; appended_media_type: string }) =>
  (dispatch: Dispatch<IMediaDetails | IErrorFeedback | ILoadingToggle>) => {
    const language: string = store.getState().languageRXS;
    const params = `media_id=${id}&appended_media_type=${appended_media_type}&language=${language}&page=1`;
    const endPoint = `/api/details?${params}`;

    return dbAPI
      .get(endPoint)
      .then((res) => {
        const results: MediaDetails = res?.data?.results;

        dispatch({
          type: ActionTypes.GET_MEDIA_DETAILS,
          payload: results,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.ERROR_FEEDBACK,
          payload: {
            api: 'Could not connect to servers',
            err,
          },
        });
      });
  };

export const getCurrentContentRatingsForTvShows =
  ({ id, appended_media_type }: { id: number; appended_media_type: string }) =>
  (dispatch: Dispatch<IContentRatingsForTvShows | IErrorFeedback | ILoadingToggle>) => {
    const language: string = store.getState().languageRXS;
    const params = `media_id=${id}&appended_media_type=${appended_media_type}&language=${language}&page=1`;

    const endPoint = `/api/details/media_ratings?${params}`;

    return dbAPI
      .get(endPoint)
      .then((res) => {
        const results: ContentRatingsForTvShows[] = res?.data?.results;

        dispatch({
          type: ActionTypes.GET_MEDIA_CONTENT_RATINGS,
          payload: results,
        });
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.ERROR_FEEDBACK,
          payload: {
            api: 'Could not connect to servers',
            err,
          },
        });
      });
  };
