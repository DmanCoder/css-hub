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
import { TabParamTypes, UseGalleryParamTypes, UseGalleryReturnType } from './Gallery.types';

const useGallery = ({ section }: UseGalleryParamTypes): UseGalleryReturnType => {
  const dispatch = useAppDispatch();

  const { streams, tvShows, trending, upcoming, myList } = useAppSelector(
    (state: RootState) => state.popularRXS,
  );
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const [media, setMedia] = React.useState<PopularType[]>(streams);

  React.useEffect(() => {
    switch (section) {
      case 'Streaming':
      case 'Whats Popular':
        setMedia(streams);
        break;
      case 'Trending':
        setMedia(trending);
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
      case 'Upcoming':
        setMedia(upcoming);
        break;
      case 'My List+':
        setMedia(myList);
        break;
      default:
        break;
    }
  }, [streams, tvShows, trending]);

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

      onChangeSelectTab(tab);
    };
  };

  return { networkId, media, onTabClick };
};

export default useGallery;
