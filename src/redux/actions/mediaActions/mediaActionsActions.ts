import { Dispatch } from 'redux';

import { dbAPI } from '../../../axios/init';
import { store } from '../../store';
import { ActionTypes } from '..';

import { IMediaStreamsAction } from './mediaActions.types';
import { loadingToggleAXN } from '../loaderActions/loaderActions';
import { ILoaderToggleAction } from '../loaderActions/loaderActions.types';

import utils from '../../../utils';

export const fetchStreamsAXN =
  () => (dispatch: Dispatch<IMediaStreamsAction | ILoaderToggleAction>) => {
    dispatch(loadingToggleAXN(true));

    const language = store.getState().languageRXS;
    const country = store.getState().countryRXS;
    const { networkId } = store.getState().networkRXS;

    // const mediaType = utils.getMediaTypeFromUrlPath();
    const mediaType = 'tv';
    const networkParam = utils.returnNetworkParam(networkId);

    const params = `?&watch_region=${country.iso}&with_watch_monetization_types=flatrate&with_origin_country=${country.iso}${networkParam}&media_type=${mediaType}&language=${language}&page=1`;
    const endpoint = `/api/discover${params}`;

    return dbAPI
      .get(endpoint)
      .then((response) => {
        dispatch(loadingToggleAXN(false));
        dispatch({
          type: ActionTypes.GET_MEDIA_STREAMS,
          payload: response.data.results,
        });
      })
      .catch(() => {
        dispatch(loadingToggleAXN(false));
      });
  };
