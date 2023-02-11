import { ActionTypes } from '..';
import { IsDarkModeType } from '../../../typescriptGlobals/types';

export interface IChangeAppThemeAction {
  type: ActionTypes.CHANGE_APP_THEME;
  payload: IsDarkModeType;
}

export type IThemeDispatchTypes = IChangeAppThemeAction;
