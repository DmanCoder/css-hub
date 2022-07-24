import { ActionTypes } from '..';

export interface ILoadingToggle {
  type: ActionTypes.LOADING_TOGGLE;
  payload: boolean;
}

export type ILoadingDispatchTypes = ILoadingToggle;
