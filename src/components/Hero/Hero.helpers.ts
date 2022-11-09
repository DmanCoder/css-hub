import { store } from '../../redux/store';
import { NetworkNameTypes } from '../../typescriptGlobals/types';
import utils from '../../utils';
import {
  ContentRatingsParams,
  NavigateParamsTypes,
  ContentDateParamTypes,
  ReturnNetworkNamesParamsTypes,
} from './Hero.types';

export const returnContentRating = ({ currentMedia }: ContentRatingsParams): string => {
  const { iso } = store.getState().countryRXS;

  if (!utils.isEmpty(currentMedia?.release_dates)) {
    let rating = currentMedia?.release_dates?.results.find((movie) => {
      return movie?.iso_3166_1 === iso;
    });

    if (utils.isEmpty(rating)) {
      rating = currentMedia?.release_dates?.results.find((movie) => {
        return movie?.iso_3166_1 === 'US';
      });
    }

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

export const onNavigateTo = ({ pathTo }: NavigateParamsTypes) => {
  return () => {
    window.location.href = pathTo;
  };
};

export const returnVoteAverage = ({ currentMedia }: ContentDateParamTypes): number => {
  return 1;
};
