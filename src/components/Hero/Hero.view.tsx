import React from 'react';

import { imgFilterURL } from '../../api/init';

import Assets from '../../assets';
import utils from '../../utils';

import { IHeroProps } from './Hero.types';
import useHero from './useHero';
import * as S from './Hero.styled';

const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const {
    description,
    indexPosition,
    streams,
    onImageError,
    mediaDetails,
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
          <S.NetworkLink href={mediaDetails?.homepage} target='_blank' title={networkName}>
            {utils.translate(
              `translateHero.${utils.removeSpaceFromString(networkName)?.toLowerCase()}`,
            )}
          </S.NetworkLink>
        </S.Network>

        <S.Title>{streams[indexPosition]?.name || streams[indexPosition]?.title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.HeroActions>
          {/* TODO: PLAY OR STOP/RESET TRAILER */}
          <S.PlayButton title={utils.translate('translateHero.playTrailer')}>
            {utils.translate('translateHero.playTrailer')}
          </S.PlayButton>

          <S.InfoButton
            title={`${utils.translate('translateHero.moreInfo')} ${
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
