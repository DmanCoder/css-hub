import React from 'react';

import { imgFilterURL } from '../../api/init';

import Assets from '../../assets';
import utils from '../../utils';

import { IHeroProps } from './Hero.types';
import useHero from './useHero';
import * as S from './Hero.styled';

// TODO: Add MEdia caption tagline to the right of the hero banner
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const {
    description,
    indexPosition,
    streams,
    onImageError,
    heroMediaDetails,
    networkName,
    contentRating,
    contentDuration,
  } = useHero();

  return (
    <S.HeroWrapper>
      <S.BackgroundImage
        src={`${imgFilterURL}/${streams[indexPosition]?.backdrop_path}`}
        alt={streams[indexPosition]?.name}
        onError={onImageError}
        className='home-page-image'
      />

      <S.Overlay />

      <S.HeroContent className='network-padding'>
        <S.Network>
          <S.NetworkLink href={heroMediaDetails?.homepage} target='_blank' title={networkName}>
            {networkName}
          </S.NetworkLink>
        </S.Network>

        <S.Title>{streams[indexPosition]?.name || streams[indexPosition]?.title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.HeroActions>
          {/* TODO: PLAY OR STOP/RESET TRAILER */}
          <S.PlayButton title='Play Trailer'>
            {utils.translate('translateHero.playTrailer')}
          </S.PlayButton>

          <S.InfoButton
            title={`More Information About ${
              streams[indexPosition]?.name || streams[indexPosition]?.title
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
