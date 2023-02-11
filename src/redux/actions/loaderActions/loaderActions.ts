import { ActionTypes } from '..';
import { ILoaderToggleAction } from './loaderActions.types';

export const loadingToggleAXN = (isLoading: boolean): ILoaderToggleAction => {
  return {
    type: ActionTypes.TOGGLE_LOADER,
    payload: isLoading,
  };
};
