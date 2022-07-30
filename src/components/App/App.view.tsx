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

appRehydrate();

const App: React.FC<IAppProps> = () => {
  const { appWrapper } = useApp();

  return (
    <S.AppWrapper ref={appWrapper}>
      <TopNavigation />
      <StreamingServices />
      <AppLoader />

      <MomentumScrolling>
        <Router>
          <Routes>
            {routes.map(({ path, Component }, index) => (
              <Route key={`${path}-${index}`} path={path} element={<Component />}></Route>
            ))}
          </Routes>
        </Router>
      </MomentumScrolling>
    </S.AppWrapper>
  );
};

export default App;
