import React from 'react';

import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';

import { UseModalReturnType } from './Modal.types';

const useApp = (): UseModalReturnType => {
  const dispatch = useAppDispatch();

  return { test: 'asdfasdf' };
};

export default useApp;
