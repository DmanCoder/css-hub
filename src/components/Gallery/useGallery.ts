import React from 'react';
import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { RootState, useAppSelector } from '../../redux/store';
import { ButtonMouseEvent, GalleryTypes } from '../../typescriptGlobals/types';
import { onSwitchBottomTabSliderAnimation } from './Gallery.gsap';
import { TabParamTypes, UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const { streams } = useAppSelector((state: RootState) => state.popularRXS);
  const [media, setMedia] = React.useState<PopularType[]>([]);
  const [galleryTabPosition, setGalleryTabPosition] = React.useState<GalleryTypes>('Streaming');

  React.useEffect(() => {
    // Do somthing
    setMedia(streams);
  }, [streams]);

  const onChangeSelectTab = (tab: GalleryTypes) => setGalleryTabPosition(tab);

  const onTabClick = ({ tab, section }: TabParamTypes) => {
    return (event: ButtonMouseEvent) => {
      onSwitchBottomTabSliderAnimation({
        event,
        section,
      });

      onChangeSelectTab(tab);
    };
  };

  return { media, onTabClick };
};

export default useGallery;
