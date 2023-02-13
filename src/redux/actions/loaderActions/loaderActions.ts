import { ActionTypes } from '..';
import { ILoaderProgressToggleAction, ILoaderToggleAction } from './loaderActions.types';

export const loadingToggleAXN = (isLoading: boolean): ILoaderToggleAction => {
  return {
    type: ActionTypes.TOGGLE_LOADER,
    payload: isLoading,
  };
};

export const loaderProgressToggleAXN = (isDone: boolean): ILoaderProgressToggleAction => {
  return {
    type: ActionTypes.LOADER_PROGRESS_TOGGLE,
    payload: isDone,
  };
};
