import { Dispatch } from 'redux';

import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';

import { GENRE_CODES, MONETIZATION_CODES } from '../../../typescriptGlobals/constants';
import { IMediaAnimationsAction } from './mediaActions.types';

export const fetchAnimationsMediaAXN = () => (dispatch: Dispatch<IMediaAnimationsAction>) => {
  const language = store.getState().languageRXS;
  const country = store.getState().countryRXS;
  const { networkId } = store.getState().networkRXS;

  const params = `?with_genres=${GENRE_CODES.tv.Animations}&with_networks=${networkId}&with_watch_monetization_types=${MONETIZATION_CODES.FLATRATE}&watch_region=${country.iso}&with_origin_country=${country.iso}&language=${language}&page=1`;
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
