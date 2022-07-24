import React from 'react';

import { ButtonMouseEvent } from '../../typescriptGlobals/types';
import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { imgURL } from '../../api/init';

import { onSwitchBottomTabSliderAnimation } from './Gallery.gsap';

import { IGalleryProps, Tab } from './Gallery.types';
import useGallery from './useGallery';
import * as S from './Gallery.styled';

const Gallery: React.FC<IGalleryProps> = ({ section, title, tabs }) => {
  const { streams } = useGallery();

  return (
    <S.Wrapper id={section}>
      <S.TabHeader>
        <S.Title className='network-padding'>{title}</S.Title>
        <S.Tabs>
          <S.TabActive id={`${section}-active`} />
          {tabs.map((tab: Tab) => (
            <S.TabButton
              key={tab.key}
              onClick={(event: ButtonMouseEvent) =>
                onSwitchBottomTabSliderAnimation({
                  event,
                  section,
                })
              }>
              <S.BtnText>{tab.name}</S.BtnText>
            </S.TabButton>
          ))}
        </S.Tabs>
      </S.TabHeader>

      <S.GallerySlider>
        <S.GallerySliderInner>
          <S.GallerySliderContent>
            {streams.map((media: PopularType) => {
              const width = 'w500';
              const url = `${imgURL}/${width}/${media.poster_path}`;

              return (
                <S.GalleryItem key={media.id}>
                  <S.GalleryThumbnail>
                    <S.GalleryImage
                      src={url}
                      alt={media.name || media.title || media.original_title}></S.GalleryImage>
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
