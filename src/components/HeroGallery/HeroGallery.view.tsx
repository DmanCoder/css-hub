import React from 'react';

import { IHeroProps } from './HeroGallery.types';
import useHero from './useHeroGallery';
import * as S from './HeroGallery.styled';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const { test } = useHero();

  return (
    <S.Wrapper id='hero'>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      <h2 style={{ color: 'white' }}>Hero Gallery</h2>
      {/* {!isEmpty(params) && (
        <S.HeroImages>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
        </S.HeroImages>
      )} */}
    </S.Wrapper>
  );
};

export default Hero;
