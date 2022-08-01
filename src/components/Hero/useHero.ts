import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentMediaDetails } from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';
import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { RootStore, useAppDispatch } from '../../redux/store';
import { NetworkNameTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import {
  ContentRatingsParams,
  ReturnNetworkNamesParamsTypes,
  UseHeroReturnType,
} from './Hero.types';

import { onImageError } from './Hero.helpers';

export const onGenerateRandomNumber = ({ streams }: { streams: PopularType[] }) => {
  const length: number = streams.length;
  const randomNumber: number = Math.floor(Math.random() * (length - 1));
  return { randomNumber };
};

const returnNetworkName = ({
  media,
  mediaDetails,
  networkId,
}: ReturnNetworkNamesParamsTypes): NetworkNameTypes | string => {
  const networkName = utils.networkIdToNetworkName(networkId);
  if (networkName === 'Shuffle' && !utils.isEmpty(media) && !utils.isEmpty(mediaDetails)) {
    if (utils.isMovie(media)) {
      return mediaDetails?.production_companies[0]?.name;
    } else {
      return mediaDetails?.networks[0]?.name;
    }
  }

  return networkName;
};

const returnContentRating = ({ heroMediaDetails }: ContentRatingsParams): string => {
  if (!utils.isEmpty(heroMediaDetails?.release_dates)) {
    const rating = heroMediaDetails?.release_dates?.results.find((movie) => {
      // TODO: ADD COUNTRY SELECTION
      return movie?.iso_3166_1 === 'US';
    });

    return rating?.release_dates[0]?.certification ?? '';
  } else if (!utils.isEmpty(heroMediaDetails?.content_ratings)) {
    return heroMediaDetails?.content_ratings?.results[0]?.rating;
  } else {
    return '';
  }
};

const returnContentDuration = ({ streams, heroMediaDetails }: any): string => {
  if (utils.isEmpty(heroMediaDetails)) return '';

  if (!utils.isMovie(streams)) {
    if (heroMediaDetails?.episode_run_time[0] !== 0) {
      const duration = utils.timeConverter(heroMediaDetails?.episode_run_time[0]);
      const hours = duration[0] === 0 ? `${duration[1]}m` : `${duration[0]}h`;
      const minutes = duration[1] === 0 ? ` ${duration[1]}m` : '';

      return `${hours}${minutes}`;
    } else {
      const duration = utils.timeConverter(heroMediaDetails?.episode_run_time[1]);
      return `${duration[1]}h`;
    }
  } else {
    const [hours, minutes] = utils.timeConverter(heroMediaDetails?.runtime);
    return `${hours}h ${minutes}m`;
  }
};

const useHero = (): UseHeroReturnType => {
  const dispatch = useAppDispatch();

  const { streams } = useSelector((state: RootStore) => state.popularRXS);
  const { networkId } = useSelector((state: RootStore) => state.networkRXS);
  const heroMediaDetails = useSelector((state: RootStore) => state.detailsRXS);

  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    if (!utils.isEmpty(streams)) {
      // const { randomNumber } = onGenerateRandomNumber({ streams });
      setIndex(0);
    }
  }, [streams]);

  React.useEffect(() => {
    if (!utils.isEmpty(index) && !utils.isEmpty(streams)) {
      const { id, appended_media_type } = streams[index];

      dispatch(getCurrentMediaDetails({ id, appended_media_type }));
    }
  }, [index]);

  const placeholder = 'Lorem Ipsum is simply dumng industry. Lorem Ips';
  const conditionalDescription: string = streams[index]?.overview || placeholder;

  const networkName = returnNetworkName({
    media: streams[index],
    mediaDetails: heroMediaDetails,
    networkId,
  });

  const contentRating = returnContentRating({ heroMediaDetails });
  const contentDuration = returnContentDuration({ streams: streams[index], heroMediaDetails });

  return {
    networkId,
    streams,
    index,
    description: conditionalDescription,
    onImageError,
    heroMediaDetails,
    networkName,
    contentRating,
    contentDuration,
  };
};

export default useHero;
