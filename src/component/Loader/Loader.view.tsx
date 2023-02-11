import React from 'react';

// Loader component
import { ILoaderProps } from './Loader.types';
import useAnimateLoader from './useAnimateLoader';
import * as S from './Loader.styled';

const Loader: React.FC<ILoaderProps> = () => {
  const { loaderRef, dotsRef, taglineRef } = useAnimateLoader();

  return (
    <S.Wrapper ref={loaderRef}>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>
      <S.Dots ref={(el: HTMLDivElement) => dotsRef.current.push(el)}></S.Dots>

      <S.MediaTagline ref={taglineRef}></S.MediaTagline>
    </S.Wrapper>
  );
};
export default Loader;
