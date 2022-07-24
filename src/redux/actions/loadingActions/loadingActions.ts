import { ActionTypes } from '..';

export const loadingToggleAXN = (isLoading: boolean) => {
  return {
    type: ActionTypes.LOADING_TOGGLE,
    payload: isLoading,
  };
};
