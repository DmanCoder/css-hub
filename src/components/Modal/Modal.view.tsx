import React from 'react';

import { IAppProps } from './Modal.types';
import useApp from './useModal';
import * as S from './Modal.styled';

const App: React.FC<IAppProps> = () => {
  const { appWrapper } = useApp();

  return (
    <S.AppWrapper ref={appWrapper}>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
      <h3>MODAL</h3>
    </S.AppWrapper>
  );
};

export default App;
