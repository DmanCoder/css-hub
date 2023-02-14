import { ActionTypes } from '..';

export interface ILoaderToggleAction {
  type: ActionTypes.TOGGLE_LOADER;
  payload: boolean;
}

export interface ILoaderProgressToggleAction {
  type: ActionTypes.LOADER_PROGRESS_TOGGLE;
  payload: boolean | null;
}

export type ILoaderDispatchTypes = ILoaderToggleAction | ILoaderProgressToggleAction;
