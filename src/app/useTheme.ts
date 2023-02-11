import React from 'react';
import { changeBetweenLightAndDarkModeAXN } from '../redux/actions/themeActions/themeActions';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';

import { Theme } from '../typescriptGlobals/types';

import utils from '../utils';

const useGallery = (): {
  theme: Theme;
  toggleThemeBetweenLightAndDarkMode: () => void;
} => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector((state: RootState) => state.themeRXS);

  const [theme, setTheme] = React.useState<Theme>('dark');

  // Toggle theme between light and dark mode
  const toggleThemeBetweenLightAndDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
      dispatch(changeBetweenLightAndDarkModeAXN(true));
    } else {
      setTheme('light');
      dispatch(changeBetweenLightAndDarkModeAXN(false));
    }
  };

  // When `isDarkMode` changes - save the value to local storage
  React.useEffect(() => {
    utils.saveToLocalStorage({ key: 'isDarkMode', value: isDarkMode });
  }, [isDarkMode]);

  // Set initial state when page loads
  React.useEffect(() => {
    if (isDarkMode) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  return { theme, toggleThemeBetweenLightAndDarkMode };
};

export default useGallery;
