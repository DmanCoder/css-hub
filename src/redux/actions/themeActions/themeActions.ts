import { ActionTypes } from '..';
import { IsDarkModeType } from '../../../typescriptGlobals/types';
import { IChangeAppThemeAction } from './themeActions.types';

export const changeBetweenLightAndDarkModeAXN = (
  isDarkMode: IsDarkModeType,
): IChangeAppThemeAction => {
  return {
    type: ActionTypes.CHANGE_APP_THEME,
    payload: isDarkMode,
  };
};
