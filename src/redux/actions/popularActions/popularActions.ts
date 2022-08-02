import { Dispatch } from 'redux';
import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
import { IMediaDetails } from '../mediaDetailsActions/mediaDetailsActions.types';
import { IPopularStreamsAction, PopularType } from './popularActions.types';

export const getPopularTvShowsAXN =
  () => (dispatch: Dispatch<IPopularStreamsAction | IErrorFeedback>) => {
    const language: string = store.getState().languageRXS;
    const { networkId } = store.getState().networkRXS;
    const params = `network_id=${networkId}&language=${language}&page=1`;
    const endPoint = `/api/popular/streams?${params}`;

    return dbAPI
      .get(endPoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_POPULAR_STREAMS,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

export const getPopularStreamsAndCurrentMediaDetails =
  () => (dispatch: Dispatch<IPopularStreamsAction | IErrorFeedback | IMediaDetails>) => {
    // store.dispatch(loadingToggleAXN(true));

    const language: string = store.getState().languageRXS;
    const { networkId } = store.getState().networkRXS;

    const params = `network_id=${networkId}&language=${language}&page=1`;
    const endpoint = `/api/popular/streams?${params}`;

    let popularStreams: PopularType[] = [];

    return dbAPI
      .get(endpoint)
      .then((response) => {
        popularStreams = response.data.results;
        const current = popularStreams[0] ?? {};

        const params = `media_id=${current?.id}&appended_media_type=${current.appended_media_type}&language=${language}&page=1`;
        const endPoint = `/api/details?${params}`;

        return dbAPI.get(endPoint);
      })
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_POPULAR_STREAMS,
          payload: popularStreams,
        });

        dispatch({
          type: ActionTypes.GET_MEDIA_DETAILS,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };
