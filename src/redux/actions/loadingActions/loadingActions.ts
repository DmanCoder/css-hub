import { ActionTypes } from '..';
import { ILoadingToggleAction } from './loadingActions.types';

export const loadingToggleAXN = (isLoading: boolean): ILoadingToggleAction => {
  return {
    type: ActionTypes.LOADING_TOGGLE,
    payload: isLoading,
  };
};
