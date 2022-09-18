import React from 'react';

import Hero from '../../components/Hero';
import Gallery from '../../components/Gallery';

import { INotFoundProps } from './NotFound.types';
import * as S from './NotFound.styled';
import utils from '../../utils';
import useHome from './useNotFound';

const NotFound: React.FC<INotFoundProps> = (): JSX.Element => {
  const { tabs, myList } = useHome();

  return (
    <S.Wrapper>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
      <h3 style={{ color: 'wite' }}>PAGE NOT FOUND</h3>
    </S.Wrapper>
  );
};

export default NotFound;
