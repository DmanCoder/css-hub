import { ActionTypes } from '..';

export interface IChangeAppThemeAction {
  type: ActionTypes.CHANGE_APP_THEME;
  payload: boolean;
}

export type IThemeDispatchTypes = IChangeAppThemeAction;
