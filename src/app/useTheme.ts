import React from 'react';

import { Theme } from '../typescriptGlobals/types';

import utils from '../utils';

const useGallery = (): {
  theme: Theme;
  toggleThemeBetweenLightAndDarkMode: () => void;
} => {
  const [theme, setTheme] = React.useState<Theme>('dark');

  const toggleThemeBetweenLightAndDarkMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  React.useEffect(() => {
    utils.saveToLocalStorage({ key: 'userTheme', value: theme });
  }, [theme]);

  return { theme, toggleThemeBetweenLightAndDarkMode };
};

export default useGallery;
