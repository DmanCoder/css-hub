import React from 'react';

const useGallery = (): {
  theme: 'light' | 'dark';
  toggleThemeBetweenLightAndDarkMode: () => void;
} => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

  const toggleThemeBetweenLightAndDarkMode = () =>
    theme === 'light' ? setTheme('dark') : setTheme('light');

  return { theme, toggleThemeBetweenLightAndDarkMode };
};

export default useGallery;
