import { ActionTypes } from '..';

export const languageActionsAXN = (isLoading: boolean) => {
  return {
    type: ActionTypes.CHANGE_LANGUAGE,
    payload: isLoading,
  };
};
