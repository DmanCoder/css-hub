import { NetworkNameTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import {
  ContentDurationParamTypes,
  ContentRatingsParams,
  ReturnNetworkNamesParamsTypes,
} from './Hero.types';

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

export const returnContentDuration = ({ currentMedia }: ContentDurationParamTypes): string => {
  if (utils.isEmpty(currentMedia)) return '';

  if (utils.isMovie(currentMedia)) {
    const movieRuntimeInMinutes = currentMedia?.runtime;
    return getDuration(movieRuntimeInMinutes);
  } else {
    if (!utils.isEmpty(currentMedia?.episode_run_time)) {
      const tvShowRuntimeInMinutes = currentMedia?.episode_run_time[0];
      return getDuration(tvShowRuntimeInMinutes);
    } else {
      const tvShowRuntimeInMinutes = currentMedia?.runtime;
      return getDuration(tvShowRuntimeInMinutes);
    }
  }
};

export const returnContentRating = ({ currentMedia }: ContentRatingsParams): string => {
  if (!utils.isEmpty(currentMedia?.release_dates)) {
    const rating = currentMedia?.release_dates?.results.find((movie) => {
      return movie?.iso_3166_1 === 'US';
    });

    return rating?.release_dates[0]?.certification ?? '';
  } else if (!utils.isEmpty(currentMedia?.content_ratings)) {
    return currentMedia?.content_ratings?.results[0]?.rating;
  } else {
    return '';
  }
};

export const returnNetworkName = ({
  currentMedia,
  networkId,
}: ReturnNetworkNamesParamsTypes): NetworkNameTypes | string => {
  const networkName = utils.networkIdToNetworkName(networkId);
  if (networkName === 'Shuffle' && !utils.isEmpty(currentMedia)) {
    if (utils.isMovie(currentMedia)) {
      return currentMedia?.production_companies[0]?.name;
    } else {
      return currentMedia?.networks[0]?.name;
    }
  }

  return networkName;
};
