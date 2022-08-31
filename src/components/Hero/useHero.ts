import { RootState, useAppSelector } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import { returnContentDuration, returnContentRating, returnNetworkName } from './Hero.helpers';
import utils from '../../utils';

const useHero = (): UseHeroReturnType => {
  const { streams } = useAppSelector((state: RootState) => state.mediaRXS);
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const { currentMedia, indexPosition } = useAppSelector((state: RootState) => state.detailsRXS);

  const placeholder = utils.translate('translateHero.placeholderDescription');
  const description: string = streams[indexPosition]?.overview || placeholder;

  const networkName = returnNetworkName({
    media: streams[indexPosition],
    currentMedia,
    networkId,
  });

  const contentRating = returnContentRating({ currentMedia });

  const contentDuration = returnContentDuration({
    media: streams[indexPosition],
    currentMedia,
  });

  return {
    networkId,
    streams,
    indexPosition,
    description,
    currentMedia,
    networkName,
    contentRating,
    contentDuration,
  };
};

export default useHero;
