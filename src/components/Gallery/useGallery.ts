import React from 'react';
import { RootState, useAppSelector } from '../../redux/store';
import { ButtonMouseEvent, GalleryTypes, MediaTypes } from '../../typescriptGlobals/types';
import { onSwitchBottomTabSliderAnimation } from './Gallery.gsap';
import {
  OnViewMediaParams,
  TabParamTypes,
  UseGalleryParamTypes,
  UseGalleryReturnType,
} from './Gallery.types';

const useGallery = ({ section }: UseGalleryParamTypes): UseGalleryReturnType => {
  const { streams, animations, comedy, action, scifi, romance, crime, horror } = useAppSelector(
    (state: RootState) => state.mediaRXS,
  );
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const [media, setMedia] = React.useState<MediaTypes[]>(streams);

  React.useEffect(() => {
    switch (section) {
      case 'Streaming':
      case 'Whats Popular':
        setMedia(streams);
        break;
      case 'Animations':
        setMedia(animations);
        break;
      case 'Comedy':
        setMedia(comedy);
        break;
      case 'Action & Adventure':
        setMedia(action);
        break;
      case 'Sci-Fi & Fantasy':
        setMedia(scifi);
        break;
      case 'Romance':
        setMedia(romance);
        break;
      case 'Crime':
        setMedia(crime);
        break;
      case 'Horror':
        setMedia(horror);
        break;
      default:
        break;
    }
  }, [streams, animations, comedy, action, scifi, romance, crime]);

  const onChangeSelectTab = (tab: GalleryTypes) => {
    // Do something...
  };

  const onTabClick = ({ tab, section }: TabParamTypes) => {
    return (event: ButtonMouseEvent) => {
      onSwitchBottomTabSliderAnimation({
        event,
        section,
      });

      onChangeSelectTab(tab);
    };
  };

  const onViewMedia = ({ media }: OnViewMediaParams) => {
    return () => {
      console.log(media);
    };
  };

  return { networkId, media, onTabClick, onViewMedia };
};

export default useGallery;
