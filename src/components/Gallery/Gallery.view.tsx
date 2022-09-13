import React from 'react';

import { GalleryTypes, MediaTypes } from '../../typescriptGlobals/types';
import { imgURL } from '../../api/init';

import { IGalleryProps } from './Gallery.types';
import useGallery from './useGallery';
import * as S from './Gallery.styled';
import { SHUFFLE_NETWORK_ID } from '../../typescriptGlobals/constants';

import utils from '../../utils';

// TODO: https://codepen.io/GreenSock/pen/JjKzZqK
// TODO: https://qodeinteractive.com/magazine/horizontal-scrolling-websites/
// TODO: https://codepen.io/ReGGae/pen/EEwrRp (MAIN)
// TODO: https://raddy.dev/blog/netflix-carousel-using-css/

const Gallery: React.FC<IGalleryProps> = ({ section, title, tabs }) => {
  const { networkId, media, onTabClick, onViewMedia } = useGallery({ section });

  return (
    <S.Wrapper id={section}>
      <S.TabHeader>
        <S.Title className='network-padding'>{title}</S.Title>
        {networkId === SHUFFLE_NETWORK_ID && (
          <S.Tabs>
            <S.TabActive id={`${section}-active`} />
            {tabs.map((tab: GalleryTypes) => (
              <S.TabButton key={tab} onClick={onTabClick({ tab, section })}>
                <S.BtnText>{tab}</S.BtnText>
              </S.TabButton>
            ))}
          </S.Tabs>
        )}
      </S.TabHeader>

      <S.GallerySlider>
        <S.GallerySliderInner>
          <S.GallerySliderContent>
            {media.map((media: MediaTypes) => {
              const width = 'w500';
              const url = `${imgURL}/${width}/${media.poster_path}`;

              return (
                <S.GalleryItem key={media.id}>
                  <S.GalleryThumbnail>
                    <S.GalleryImage
                      src={url}
                      onError={utils.imageError}
                      alt={media.name || media.title || media.original_title}
                      onClick={onViewMedia({ media })}></S.GalleryImage>
                  </S.GalleryThumbnail>
                </S.GalleryItem>
              );
            })}
          </S.GallerySliderContent>
        </S.GallerySliderInner>
      </S.GallerySlider>

      {/* <S.Proxy></S.Proxy> */}
    </S.Wrapper>
  );
};

export default Gallery;
