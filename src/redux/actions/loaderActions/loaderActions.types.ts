import { ActionTypes } from '..';

export interface ILoaderToggleAction {
  type: ActionTypes.TOGGLE_LOADER;
  payload: boolean;
}

export type ILoaderDispatchTypes = ILoaderToggleAction;
