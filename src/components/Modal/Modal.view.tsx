import React from 'react';

import { IModalProps } from './Modal.types';
import useApp from './useModal';
import * as S from './Modal.styled';

const App: React.FC<IModalProps> = ({ children }) => {
  const { test } = useApp();

  return <S.ModalWrapper>{children}</S.ModalWrapper>;
};

export default App;
