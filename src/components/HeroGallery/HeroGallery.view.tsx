import React from 'react';

import Assets from '../../assets';

import { IHeroProps } from './HeroGallery.types';
import useHeroGallery from './useHeroGallery';
import * as S from './HeroGallery.styled';
import { imgURL } from '../../api/init';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const { images } = useHeroGallery();

  return (
    <S.Wrapper id='hero'>
      <S.Thumbnails>
        {images?.results?.map((image) => {
          const width = 'w780';
          const url = `${imgURL}/${width}/${image.file_path}`;
          const background = `url('${url}') no-repeat center / cover`;

          return <S.Thumbnail style={{ background }}></S.Thumbnail>;
        })}
      </S.Thumbnails>

      <S.TempName>
        <S.Actions>
          <S.ActionButton>
            <Assets.Icons.PrevArrow />
          </S.ActionButton>
          <S.ActionButton>
            <Assets.Icons.NextArrow />
          </S.ActionButton>
        </S.Actions>

        <S.ProgressBar>
          <S.ProgressBarIndicator />
        </S.ProgressBar>

        <S.ProgressNumber>
          <S.ProgressNumberNum>01</S.ProgressNumberNum>
        </S.ProgressNumber>
      </S.TempName>
    </S.Wrapper>
  );
};

export default Hero;
