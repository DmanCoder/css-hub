import { Dispatch } from 'redux';
import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import { GENRE_CODES, MONETIZATION_CODES } from '../../../typescriptGlobals/constants';
import utils from '../../../utils';
import { store } from '../../store';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
import { IMediaDetails } from '../mediaDetailsActions/mediaDetailsActions.types';
import {
  IKidsMediaActions,
  IMediaUpcomingAction,
  IPopularStreamsAction,
  IPopularTvShowsAction,
  IRandomNumberAction,
  ITrendingAction,
  PopularType,
} from './popularActions.types';

// TODO: https://www.themoviedb.org/talk/593b23a1925141059b001b81 (FOR MULTIPLE NETWORK ID PASSED)

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

// export const fetchPopularStreamsAXN =
//   () => (dispatch: Dispatch<IPopularStreamsAction | IErrorFeedback>) => {
//     const language = store.getState().languageRXS;
//     const country = store.getState().countryRXS;
//     const { networkId } = store.getState().networkRXS;

//     const params = `selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
//     const endpoint = `/api/popular/streams?${params}`;

//     return dbAPI
//       .get(endpoint)
//       .then((response) => {
//         dispatch({
//           type: ActionTypes.GET_POPULAR_STREAMS,
//           payload: response.data.results,
//         });
//       })
//       .catch((err) => {
//         console.log(err, 'ERROR');
//       });
//   };

export const fetchTrendingMediaAXN =
  () => (dispatch: Dispatch<ITrendingAction | IErrorFeedback>) => {
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

export const fetchUpcomingMediaAXN =
  () => (dispatch: Dispatch<IMediaUpcomingAction | IErrorFeedback>) => {
    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    const params = `selected_country=${country.iso}&network_id=${networkId}&language=${language}&page=1`;
    const endpoint = `/api/upcoming?${params}`;

    return dbAPI
      .get(endpoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_MEDIA_UPCOMING,
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

        const params = `media_id=${media?.id}&media_type=${media.media_type}&language=${language}&page=1`;
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

export const fetchPopularStreamsAXN = () => (dispatch: Dispatch<any>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const params = `?with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_UPCOMING,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

export const fetchAnimeMediaAXN = () => (dispatch: Dispatch<any>) => {
  const language = store.getState().languageRXS;

  const params = `?with_genres=${GENRE_CODES.Animations}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=JP&with_origin_country=JP&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_ANIME,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

export const fetchAnimationsMediaAXN = () => (dispatch: Dispatch<any>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const params = `?with_genres=${GENRE_CODES.Animations}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_ANIMATIONS,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

export const fetchKidsMediaAXN = () => (dispatch: Dispatch<IKidsMediaActions>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const params = `?with_genres=${GENRE_CODES.Kids}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_KIDS_MEDIA,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};
