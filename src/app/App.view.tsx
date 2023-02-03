import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Application Theme
import AppTheme from '../styled/theme/theme';
import { CssReset } from '../styled/main';

// Components
import TopMenuNavigation from '../component/TopMenuNavigation';

// Hooks
import useTheme from './useTheme';
import useDimensions from './useDimensions';

// Routes
import routes from '../routes';

// App Component
import { IAppProps } from './App.types';
import * as S from './App.styled';

// App component
const App: React.FC<IAppProps> = (): JSX.Element => {
  const { theme, toggleThemeBetweenLightAndDarkMode } = useTheme();
  useDimensions();

  return (
    <Router>
      <ThemeProvider theme={AppTheme[theme]}>
        <CssReset />
        <TopMenuNavigation
          toggleThemeBetweenLightAndDarkMode={toggleThemeBetweenLightAndDarkMode}
        />
        <S.Wrapper>
          <Routes>
            {routes.map(({ path, Component }, index) => (
              <Route key={`${path}-${index}`} path={path} element={<Component />}></Route>
            ))}
          </Routes>
        </S.Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
