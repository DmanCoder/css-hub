import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNavigation from '../TopNavigation/TopNavigation.view';
import AppLoader from '../AppLoader';
import StreamingServices from '../StreamingServices';
import MomentumScrolling from '../MomentumScrolling';

import appRehydrate from '../../appRehydrate';
import routes from '../../routes';

import { IAppProps } from './App.types';
import useApp from './useApp';
import * as S from './App.styled';
import hooks from '../../hooks';

appRehydrate();

// TODO: https://www.themoviedb.org/talk/630441bb21118f007d33178f (Instead of static purple show Dominant colors)
// TODO: https://stackoverflow.com/questions/2541481/get-average-color-of-image-via-javascript (Instead of static purple show Dominant colors)

const App: React.FC<IAppProps> = () => {
  const { appWrapper } = useApp();
  hooks.useOnLocationChange();

  return (
    <S.AppWrapper ref={appWrapper}>
      <AppLoader />

      <Router>
        <TopNavigation />
        <StreamingServices />
        <MomentumScrolling>
          <Routes>
            {routes.map(({ path, Component }, index) => (
              <Route key={`${path}-${index}`} path={path} element={<Component />}></Route>
            ))}
          </Routes>
        </MomentumScrolling>
      </Router>
    </S.AppWrapper>
  );
};

export default App;
