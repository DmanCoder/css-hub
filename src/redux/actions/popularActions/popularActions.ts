import { Dispatch } from 'redux';
import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import utils from '../../../utils';
import { store } from '../../store';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
import { IMediaDetails } from '../mediaDetailsActions/mediaDetailsActions.types';
import {
  IPopularStreamsAction,
  IPopularTvShowsAction,
  IRandomNumberAction,
  ITrendingAction,
  PopularType,
} from './popularActions.types';

export const fetchPopularTvShowsAXN =
  () => (dispatch: Dispatch<IPopularTvShowsAction | IErrorFeedback>) => {
    const language: string = store.getState().languageRXS;
    const { networkId } = store.getState().networkRXS;
    const country = store.getState().countryRXS;
    const params = `selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
    const endPoint = `/api/popular/tv?${params}`;

    return dbAPI
      .get(endPoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_POPULAR_TV_SHOWS,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

export const fetchPopularStreamsAXN =
  () => (dispatch: Dispatch<IPopularStreamsAction | IErrorFeedback>) => {
    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    const params = `selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
    const endpoint = `/api/popular/streams?${params}`;

    return dbAPI
      .get(endpoint)
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

export const fetchTrendingAXN = () => (dispatch: Dispatch<ITrendingAction | IErrorFeedback>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const params = `time_window=week&selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
  const endpoint = `/api/trending?${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_TRENDING,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

export const fetchPopularStreamsAndCurrentMediaDetails =
  () =>
  (
    dispatch: Dispatch<
      IPopularStreamsAction | IErrorFeedback | IMediaDetails | IRandomNumberAction
    >,
  ) => {
    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    const params = `selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
    const endpoint = `/api/popular/streams?${params}`;

    let popularStreams: PopularType[] = [];

    return dbAPI
      .get(endpoint)
      .then((response) => {
        popularStreams = response.data.results;

        const randomNumber = utils.randomNumberGenerator({ max: popularStreams.length - 1 });
        dispatch({
          type: ActionTypes.RANDOM_NUMBER,
          payload: randomNumber,
        });

        const media = popularStreams[randomNumber] ?? {};

        const params = `media_id=${media?.id}&appended_media_type=${media.appended_media_type}&language=${language}&page=1`;
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
