import React from 'react';

import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';

import { UseModalReturnType } from './Modal.types';

const useModal = (): UseModalReturnType => {
  const dispatch = useAppDispatch();
  const { currentMedia } = useAppSelector((state: RootState) => state.detailsRXS);

  return { currentMedia };
};

export default useModal;
