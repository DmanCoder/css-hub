import React from 'react';
import {
  fetchPopularStreamsAXN,
  fetchPopularTvShowsAXN,
} from '../../redux/actions/popularActions/popularActions';
import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { ButtonMouseEvent, GalleryTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import { onSwitchBottomTabSliderAnimation } from './Gallery.gsap';
import { TabParamTypes, UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const dispatch = useAppDispatch();

  const { streams, tvShows } = useAppSelector((state: RootState) => state.popularRXS);
  const [media, setMedia] = React.useState<PopularType[]>([]);

  React.useEffect(() => {
    // Do somthing
    setMedia(streams);
  }, [streams, tvShows]);

  const onChangeSelectTab = (tab: GalleryTypes) => {
    switch (tab) {
      case 'For Rent':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        break;
      case 'On Tv':
        if (!utils.isEmpty(tvShows)) return;
        dispatch(fetchPopularTvShowsAXN());
        break;
      case 'In Theaters':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        break;
      case 'Streaming':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        break;
      default:
        break;
    }
  };

  const onTabClick = ({ tab, section }: TabParamTypes) => {
    return (event: ButtonMouseEvent) => {
      onSwitchBottomTabSliderAnimation({
        event,
        section,
      });

      console.log(tab, '-0-=-=-=-=-=-=_');

      onChangeSelectTab(tab);
    };
  };

  return { media, onTabClick };
};

export default useGallery;
