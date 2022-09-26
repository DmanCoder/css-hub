import React from 'react';

import { IModalProps } from './Modal.types';
// import useModal from './useModal';
import * as S from './Modal.styled';

const Modal: React.FC<IModalProps> = ({ children }) => {
  return <S.ModalWrapper>{children}</S.ModalWrapper>;
};

export default Modal;
