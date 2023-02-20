import { store } from '../redux/store';

import { changeBetweenLightAndDarkModeAXN } from '../redux/actions/themeActions/themeActions';

import utils from '../utils';

export const rehydrateUserTheme = () => {
  const isDarkMode: null | string = utils.getDataFromLocalStorage({ key: 'isDarkMode' });

  if (isDarkMode) {
    store.dispatch(changeBetweenLightAndDarkModeAXN(utils.stringToBoolean(isDarkMode)));
  }
};
