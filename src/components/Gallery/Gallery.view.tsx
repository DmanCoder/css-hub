import React from 'react';

import { MediaTypes } from '../../typescriptGlobals/types';
import { imgURL } from '../../api/init';

import { IGalleryProps } from './Gallery.types';
import useGallery from './useGallery';
import * as S from './Gallery.styled';

import utils from '../../utils';
import Assets from '../../assets';

// TODO: https://codepen.io/GreenSock/pen/JjKzZqK
// TODO: https://qodeinteractive.com/magazine/horizontal-scrolling-websites/
// TODO: https://codepen.io/ReGGae/pen/EEwrRp (MAIN)
// TODO: https://raddy.dev/blog/netflix-carousel-using-css/

const Gallery: React.FC<IGalleryProps> = ({ section, title }) => {
  const { media, onViewMedia, onNavigateTo } = useGallery({ section });

  return (
    <S.Wrapper id={section}>
      <S.TabHeader>
        <S.Title className='network-padding'>{title}</S.Title>
        {/* {networkId === SHUFFLE_NETWORK_ID && (
          <S.Tabs>
            <S.TabActive id={`${section}-active`} />
            {tabs.map((tab: GalleryTypes) => (
              <S.TabButton key={tab} onClick={onTabClick({ tab, section })}>
                <S.BtnText>{tab}</S.BtnText>
              </S.TabButton>
            ))}
          </S.Tabs>
        )} */}
        <S.ExploreAll>
          Explore All <Assets.Icons.DoubleArrow />
        </S.ExploreAll>
      </S.TabHeader>

      <S.GallerySlider>
        <S.GallerySliderInner>
          <S.GallerySliderContent>
            {media.map((media: MediaTypes) => {
              const width = 'w500';
              const url = `${imgURL}/${width}/${media.poster_path}`;

              return (
                <S.GalleryItem key={media.id}>
                  <S.GalleryThumbnail
                    onClick={onNavigateTo({
                      pathTo: `media-details/${media?.appended_media_type}/${media?.id}`,
                    })}>
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
