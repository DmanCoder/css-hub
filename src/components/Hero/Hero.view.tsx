import React from 'react';

import Assets from '../../assets';
import utils from '../../utils';

import { IHeroProps } from './Hero.types';
import useHero from './useHero';
import * as S from './Hero.styled';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const { description, currentMedia, networkName, contentRating, contentDuration, backdropImage } =
    useHero();

  return (
    <S.HeroWrapper id='hero'>
      <S.BackgroundImage
        src={backdropImage}
        alt={currentMedia?.name}
        onError={utils.imageError}
        className='home-page-image'
      />

      <S.Overlay />

      <S.HeroContent className='network-padding'>
        <S.Network>
          <S.NetworkLink href={currentMedia?.homepage} target='_blank' title={networkName}>
            {utils.translate(
              `translateHero.${utils.removeSpaceFromString(networkName)?.toLowerCase()}`,
            )}
          </S.NetworkLink>
        </S.Network>

        <S.Title>{currentMedia?.name || currentMedia?.title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.HeroActions>
          {/* TODO: PLAY OR STOP/RESET TRAILER */}
          <S.PlayButton title={utils.translate('translateHero.playTrailer')}>
            {utils.translate('translateHero.playTrailer')}
          </S.PlayButton>

          <S.InfoButton
            title={`${utils.translate('translateHero.moreInfo')} ${
              currentMedia?.name || currentMedia?.title
            }`}>
            <Assets.Icons.GraphicEQ />
          </S.InfoButton>
        </S.HeroActions>

        {!utils.isEmpty(contentRating) && (
          <S.ContentRating>
            <S.ContentRatingText>{contentRating}</S.ContentRatingText>
            <S.ContentRatingText></S.ContentRatingText>
            <S.ContentRatingText>{contentDuration}</S.ContentRatingText>
          </S.ContentRating>
        )}
      </S.HeroContent>
    </S.HeroWrapper>
  );
};

export default Hero;
