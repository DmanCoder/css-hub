import OnErrorImage from '../../assets/imgs/onerror-image.jpg';
import { NetworkNameTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import {
  ContentDurationParamTypes,
  ContentRatingsParams,
  ReturnNetworkNamesParamsTypes,
} from './Hero.types';

export const onImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const { currentTarget } = event;
  currentTarget.onerror = null;
  currentTarget.src = OnErrorImage;
};

const getDuration = (totalMinutes: number) => {
  const minutesIn1Hour = 60;

  if (totalMinutes >= minutesIn1Hour) {
    const duration = utils.timeConverter(totalMinutes);
    const hours = duration[0];
    const minutes = duration[1] === 0 ? '' : ` ${duration[1]}m`;
    return `${hours}h${minutes}`;
  } else {
    const duration = utils.timeConverter(totalMinutes);
    const minutes = duration[1];
    return `${minutes}m`;
  }
};

export const returnContentDuration = ({
  media,
  mediaDetails,
}: ContentDurationParamTypes): string => {
  if (utils.isEmpty(mediaDetails)) return '';

  if (utils.isMovie(media)) {
    const movieRuntimeInMinutes = mediaDetails?.runtime;
    return getDuration(movieRuntimeInMinutes);
  } else {
    if (!utils.isEmpty(mediaDetails?.episode_run_time)) {
      const tvShowRuntimeInMinutes = mediaDetails?.episode_run_time[0];
      return getDuration(tvShowRuntimeInMinutes);
    } else {
      const tvShowRuntimeInMinutes = mediaDetails?.runtime;
      return getDuration(tvShowRuntimeInMinutes);
    }
  }
};

export const returnContentRating = ({ mediaDetails }: ContentRatingsParams): string => {
  if (!utils.isEmpty(mediaDetails?.release_dates)) {
    const rating = mediaDetails?.release_dates?.results.find((movie) => {
      return movie?.iso_3166_1 === 'US';
    });

    return rating?.release_dates[0]?.certification ?? '';
  } else if (!utils.isEmpty(mediaDetails?.content_ratings)) {
    return mediaDetails?.content_ratings?.results[0]?.rating;
  } else {
    return '';
  }
};

export const returnNetworkName = ({
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
