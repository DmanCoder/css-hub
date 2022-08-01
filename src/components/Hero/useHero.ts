import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import utils from '../../utils';

import {
  onImageError,
  returnContentDuration,
  returnContentRating,
  returnNetworkName,
} from './Hero.helpers';

const useHero = (): UseHeroReturnType => {
  const { streams } = useSelector((state: RootStore) => state.popularRXS);
  const { networkId } = useSelector((state: RootStore) => state.networkRXS);
  const mediaDetails = useSelector((state: RootStore) => state.detailsRXS);

  const [indexPosition, setIndexPosition] = React.useState<number>(0);

  React.useEffect(() => {
    if (!utils.isEmpty(streams)) {
      const randomNumber = utils.randomNumberGenerator({ max: streams.length });
      setIndexPosition(randomNumber);
    }
  }, [streams]);

  const placeholder =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
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
