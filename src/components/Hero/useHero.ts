import { RootState, useAppSelector } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import {
  onImageError,
  returnContentDuration,
  returnContentRating,
  returnNetworkName,
} from './Hero.helpers';
import utils from '../../utils';

const useHero = (): UseHeroReturnType => {
  const { streams, indexPosition } = useAppSelector((state: RootState) => state.popularRXS);
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const mediaDetails = useAppSelector((state: RootState) => state.detailsRXS);

  const placeholder = utils.translate('translateLeftNavigation.placeholderDescription');
  const description: string = streams[indexPosition]?.overview || placeholder;

  const networkName = returnNetworkName({
    media: streams[indexPosition],
    mediaDetails: mediaDetails,
    networkId,
  });

  const contentRating = returnContentRating({ mediaDetails });

  const contentDuration = returnContentDuration({
    media: streams[indexPosition],
    mediaDetails,
  });

  return {
    networkId,
    streams,
    indexPosition,
    description,
    onImageError,
    mediaDetails,
    networkName,
    contentRating,
    contentDuration,
  };
};

export default useHero;
