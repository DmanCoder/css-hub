import { Dispatch } from 'redux';

import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';

import { GENRE_CODES, MONETIZATION_CODES } from '../../../typescriptGlobals/constants';
import {
  IMediaActionAndAdventureAction,
  IMediaAnimationsAction,
  IMediaComedyAction,
  IMediaCrimeAction,
  IMediaHorrorAction,
  IMediaRomanceAction,
  IMediaScifiAndFantasyAction,
  IMediaStreamsAction,
} from './mediaActions.types';
import utils from '../../../utils';

/**
 * @description Fetch genre - Popular/Tremding Steams (tv/movies)
 */
export const fetchStreamsAXN = () => (dispatch: Dispatch<IMediaStreamsAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();

  let networkIdParam = `&with_networks=${networkId}`;
  if (networkId === -1) networkIdParam = '';

  const params = `?&watch_region=${country.iso}&with_watch_monetization_types=flatrate&with_origin_country=${country.iso}${networkIdParam}&media_type=${mediaType}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_STREAMS,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

/**
 * @description Fetch genre - Animations (tv/movies)
 */
export const fetchAnimationsMediaAXN = () => (dispatch: Dispatch<IMediaAnimationsAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();
  const params = `?with_genres=${GENRE_CODES.Animations}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
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

/**
 * @description Fetch genre - Action & Adventrue (tv/movies)
 */
export const fetchActionAndAdventureMediaAXN =
  () => (dispatch: Dispatch<IMediaActionAndAdventureAction>) => {
    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    const mediaType = utils.getMediaTypeFromUrlPath();
    const params = `?with_genres=${GENRE_CODES.Comedy}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
    const endpoint = `/api/discover${params}`;

    return dbAPI
      .get(endpoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_MEDIA_ACTION_AND_ADVENTURE,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

/**
 * @description Fetch genre - Comedy (tv/movies)
 */
export const fetchComedyMediaAXN = () => (dispatch: Dispatch<IMediaComedyAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();
  const params = `?with_genres=${GENRE_CODES.Comedy}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_COMEDY,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

/**
 * @description Fetch genre - Scifi & Fantasy (tv/movies)
 */
export const fetchScifiAndFantasyMediaAXN =
  () => (dispatch: Dispatch<IMediaScifiAndFantasyAction>) => {
    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    const mediaType = utils.getMediaTypeFromUrlPath();
    const params = `?with_genres=${GENRE_CODES['Sci-Fi & Fantasy']}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
    const endpoint = `/api/discover${params}`;

    return dbAPI
      .get(endpoint)
      .then((response) => {
        dispatch({
          type: ActionTypes.GET_MEDIA_SCIFI_AND_FANTASY,
          payload: response.data.results,
        });
      })
      .catch((err) => {
        console.log(err, 'ERROR');
      });
  };

/**
 * @description Fetch genre - Romance (tv/movies)
 */
export const fetchRomanceMediaAXN = () => (dispatch: Dispatch<IMediaRomanceAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();
  const params = `?with_genres=${GENRE_CODES.Romance}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_ROMANCE,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

/**
 * @description Fetch genre - Crime (tv/movies)
 */
export const fetchCrimeMediaAXN = () => (dispatch: Dispatch<IMediaCrimeAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();
  const params = `?with_genres=${GENRE_CODES.Crime}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_CRIME,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};

/**
 * @description Fetch genre - Horror (tv/movies)
 */
export const fetchHorrorMediaAXN = () => (dispatch: Dispatch<IMediaHorrorAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const mediaType = utils.getMediaTypeFromUrlPath();
  const params = `?with_genres=${GENRE_CODES.Horror}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&media_type=${mediaType}&language=${language}&page=1`;
  const endpoint = `/api/discover${params}`;

  return dbAPI
    .get(endpoint)
    .then((response) => {
      dispatch({
        type: ActionTypes.GET_MEDIA_HORROR,
        payload: response.data.results,
      });
    })
    .catch((err) => {
      console.log(err, 'ERROR');
    });
};
