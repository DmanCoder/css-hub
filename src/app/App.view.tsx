import React from 'react';
import { ThemeProvider } from 'styled-components';

// Theme
import AppTheme from '../styled/theme/theme';
import { CssReset } from '../styled/main';

// Components
import TopMenuNavigation from '../component/TopMenuNavigation';

// Hooks
import useTheme from './useTheme';

import { IAppProps } from './App.types';

import * as S from './App.styled';

// App component
const App: React.FC<IAppProps> = (): JSX.Element => {
  const { theme, toggleThemeBetweenLightAndDarkMode } = useTheme();

  return (
    <ThemeProvider theme={AppTheme[theme]}>
      <CssReset />
      <TopMenuNavigation />
      <S.Wrapper>
        <S.Title>Hello world this is me - Life could be...</S.Title>
        <S.Button onClick={toggleThemeBetweenLightAndDarkMode}>Mode.</S.Button>
      </S.Wrapper>
    </ThemeProvider>
  );
};

export default App;