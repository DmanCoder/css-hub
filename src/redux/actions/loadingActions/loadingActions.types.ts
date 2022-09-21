import { ActionTypes } from '..';

export interface ILoadingToggleAction {
  type: ActionTypes.LOADING_TOGGLE;
  payload: boolean;
}

export type ILoadingDispatchTypes = ILoadingToggleAction;
