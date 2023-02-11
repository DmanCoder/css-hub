import React from 'react';

// Loader component
// import { IAppLoaderProps } from './AppLoader.types';
// import useAppLoader from './useAppLoader';
import * as S from './Loader.styled';

const Loader: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Dots></S.Dots>
      <S.Dots></S.Dots>
      <S.Dots></S.Dots>
      <S.Dots></S.Dots>

      <S.MediaTagline></S.MediaTagline>
    </S.Wrapper>
  );
};
export default Loader;
