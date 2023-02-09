import { ActionTypes } from '..';
import { IChangeAppThemeAction } from './themeActions.types';

export const changeBetweenLightAndDarkModeAXN = (theme: boolean): IChangeAppThemeAction => {
  return {
    type: ActionTypes.CHANGE_APP_THEME,
    payload: theme,
  };
};
