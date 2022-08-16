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
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const [media, setMedia] = React.useState<PopularType[]>(streams);
  const [tabPosition, setTabPosition] = React.useState<GalleryTypes>('Streaming');

  React.useEffect(() => {
    // Do somthing
    switch (tabPosition) {
      case 'Streaming':
        setMedia(streams);
        break;
      case 'For Rent':
        setMedia(streams);
        break;
      case 'On Tv':
        setMedia(tvShows);
        break;
      case 'In Theaters':
        setMedia(streams);
        break;
      default:
        break;
    }
  }, [tabPosition, streams, tvShows]);

  const onChangeSelectTab = (tab: GalleryTypes) => {
    switch (tab) {
      case 'For Rent':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        setTabPosition(tab);
        break;
      case 'On Tv':
        if (!utils.isEmpty(tvShows)) return;
        dispatch(fetchPopularTvShowsAXN());
        setTabPosition(tab);
        break;
      case 'In Theaters':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        setTabPosition(tab);
        break;
      case 'Streaming':
        if (!utils.isEmpty(streams)) return;
        dispatch(fetchPopularStreamsAXN());
        setTabPosition(tab);
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

  return { networkId, media, onTabClick };
};

export default useGallery;
