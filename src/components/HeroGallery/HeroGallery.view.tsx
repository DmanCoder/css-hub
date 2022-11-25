import React from 'react';

import { IHeroProps } from './HeroGallery.types';
import useHero from './useHeroGallery';
import * as S from './HeroGallery.styled';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const { test } = useHero();

  return (
    <S.Wrapper id='hero'>
      <S.Thumbnails>
        <S.Thumbnail src='https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></S.Thumbnail>
        <S.Thumbnail src='https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></S.Thumbnail>
        <S.Thumbnail src='https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></S.Thumbnail>
        <S.Thumbnail src='https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></S.Thumbnail>
        <S.Thumbnail src='https://images.pexels.com/photos/14271136/pexels-photo-14271136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></S.Thumbnail>
      </S.Thumbnails>
      <S.Actions>
        <button>next</button>
        <button>prev</button>
      </S.Actions>
    </S.Wrapper>
  );
};

export default Hero;
