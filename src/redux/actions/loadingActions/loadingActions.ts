import { ActionTypes } from '..';
import { ILoadingToggle } from './loadingActions.types';

export const loadingToggleAXN = (isLoading: boolean): ILoadingToggle => {
  return {
    type: ActionTypes.LOADING_TOGGLE,
    payload: isLoading,
  };
};
