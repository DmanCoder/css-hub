import { Dispatch } from 'redux';
import { ActionTypes } from '..';
import { dbAPI } from '../../../api/init';
import { store } from '../../store';
import { IErrorFeedback } from '../errorsActions/errorsActions.types';
// import { loadingToggleAXN } from '../loadingActions/loadingActions';
import { IPopularAction } from './popularActions.types';

export const getPopularTvShowsAXN = () => (dispatch: Dispatch<IPopularAction | IErrorFeedback>) => {
  // store.dispatch(loadingToggleAXN(true));

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

      // store.dispatch(loadingToggleAXN(false));
    })
    .catch((err) => {
      if (err.message === 'Network Error') {
        dispatch({
          type: ActionTypes.ERROR_FEEDBACK,
          payload: {
            api: 'Could not connect to servers',
          },
        });
      } else {
        // const { errors } = err?.response?.data
        // dispatch({
        //   type: ActionTypes.ERROR_FEEDBACK,
        //   payload: errors,
        // })
      }

      // store.dispatch(loadingToggleAXN(false));
    });
};
