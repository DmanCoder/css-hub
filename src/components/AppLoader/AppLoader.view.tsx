import React from 'react';

import { IAppLoaderProps } from './AppLoader.types';
import useAppLoader from './useAppLoader';
import * as S from './AppLoader.styled';

const AppLoader: React.FC<IAppLoaderProps> = () => {
  const { loaderRef, dotsRef, taglineRef, mediaDetails } = useAppLoader();

  return (
    <S.AppLoaderWrapper ref={loaderRef}>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.MediaTagline ref={taglineRef}>{mediaDetails?.tagline}</S.MediaTagline>
    </S.AppLoaderWrapper>
  );
};
export default AppLoader;
