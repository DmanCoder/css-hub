import React from 'react';

import Assets from '../../assets';
import utils from '../../utils';

import { IHeroProps } from './Hero.types';
import useHero from './useHero';
import * as S from './Hero.styled';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const { description, currentMedia, networkName, backdropImage, onNavigateTo, params } = useHero();

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

        <S.MediaDetails>
          <S.MediaDetailStars>
            {[...Array(utils.getMediaDetails?.starAverageRating(currentMedia))].map(
              (item, index) => (
                <S.MediaDetailStarsPrimary key={index}>
                  <Assets.Icons.Star />
                </S.MediaDetailStarsPrimary>
              ),
            )}

            {[
              ...Array(utils.difference(utils.getMediaDetails?.starAverageRating(currentMedia), 5)),
            ].map((item, index) => {
              return (
                <S.MediaDetailStarsSecondary key={`${index}-stars-left`}>
                  <Assets.Icons.Star />
                </S.MediaDetailStarsSecondary>
              );
            })}
          </S.MediaDetailStars>

          <S.MediaDetailInfo>
            <S.MediaDetailData>{utils.getMediaDetails?.date(currentMedia)}</S.MediaDetailData>
            <S.MediaDetailData>{utils.getMediaDetails?.genres(currentMedia)}</S.MediaDetailData>
            {!utils.isEmpty(params) && (
              <S.MediaDetailData>{utils.getMediaDetails?.duration(currentMedia)}</S.MediaDetailData>
            )}
          </S.MediaDetailInfo>
        </S.MediaDetails>

        <S.Description>{description}</S.Description>

        {utils.isEmpty(params) && (
          <S.HeroActions>
            {/* TODO: PLAY OR STOP/RESET TRAILER */}
            <S.PlayButton title={utils.translate('translateHero.playTrailer')}>
              {utils.translate('translateHero.playTrailer')}
            </S.PlayButton>

            <S.InfoButton
              onClick={onNavigateTo({
                pathTo: `/media-details/${currentMedia?.appended_media_type}/${currentMedia?.id}`,
              })}
              title={`${utils.translate('translateHero.moreInfo')} ${
                currentMedia?.name || currentMedia?.title
              }`}>
              <Assets.Icons.GraphicEQ />
            </S.InfoButton>
          </S.HeroActions>
        )}

        {!utils.isEmpty(utils.getMediaDetails?.certification(currentMedia)) &&
          utils.isEmpty(params) && (
            <S.ContentRating>
              <S.ContentRatingText>
                {utils.getMediaDetails?.certification(currentMedia)}
              </S.ContentRatingText>
              {!utils.isEmpty(utils.getMediaDetails?.duration(currentMedia)) && (
                <S.ContentRatingText primary>
                  {utils.getMediaDetails?.duration(currentMedia)}
                </S.ContentRatingText>
              )}
            </S.ContentRating>
          )}
      </S.HeroContent>

      {/* {!isEmpty(params) && (
        <S.HeroImages>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
        </S.HeroImages>
      )} */}
    </S.HeroWrapper>
  );
};

export default Hero;
