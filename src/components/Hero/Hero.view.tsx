import React from 'react';

import Modal from '../Modal';

import Assets from '../../assets';
import utils from '../../utils';

import { IHeroProps } from './Hero.types';
import useHero from './useHero';
import * as S from './Hero.styled';
import isEmpty from '../../utils/isEmpty';

// TODO: Change color of LOGO base on selected network id | Gallery title bottom border
const Hero: React.FC<IHeroProps> = (): JSX.Element => {
  const {
    description,
    currentMedia,
    networkName,
    contentRating,
    contentDuration,
    backdropImage,
    isModal,
    onNavigateTo,
    params,
  } = useHero();

  return (
    <S.HeroWrapper id='hero'>
      <S.BackgroundImage
        src={backdropImage}
        alt={currentMedia?.name}
        onError={utils.imageError}
        className='home-page-image'
      />

      <S.Overlay />

      {/* {isModal && (
        <Modal>
          <h3>{currentMedia?.name}</h3>
        </Modal>
      )} */}

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
            onClick={onNavigateTo({
              pathTo: `/media-details/${currentMedia?.appended_media_type}/${currentMedia?.id}`,
            })}
            title={`${utils.translate('translateHero.moreInfo')} ${
              currentMedia?.name || currentMedia?.title
            }`}>
            <Assets.Icons.GraphicEQ />
          </S.InfoButton>
        </S.HeroActions>

        {!utils.isEmpty(contentRating) && utils.isEmpty(params) && (
          <S.ContentRating>
            <S.ContentRatingText>{contentRating}</S.ContentRatingText>
            {!utils.isEmpty(contentDuration) && (
              <S.ContentRatingText primary>{contentDuration}</S.ContentRatingText>
            )}
          </S.ContentRating>
        )}
      </S.HeroContent>

      {!isEmpty(params) && (
        <S.HeroImages>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
          <S.Thmubnails src='https://image.tmdb.org/t/p/w500//dc9IY0ZT2T3gw0RfjmQdsoWp992.jpg'></S.Thmubnails>
        </S.HeroImages>
      )}
    </S.HeroWrapper>
  );
};

export default Hero;
