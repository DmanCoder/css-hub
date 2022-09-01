import { RootState, useAppSelector, useAppDispatch } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import { returnContentDuration, returnContentRating, returnNetworkName } from './Hero.helpers';
import utils from '../../utils';
import { imgFilterURL } from '../../api/init';
import React from 'react';
import { setBackdropImageAXN } from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';

const useHero = (): UseHeroReturnType => {
  const dispatch = useAppDispatch();

  const { streams } = useAppSelector((state: RootState) => state.mediaRXS);
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const { currentMedia, indexPosition, backdropImage } = useAppSelector(
    (state: RootState) => state.detailsRXS,
  );

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

  React.useEffect(() => {
    if (!utils.isEmpty(streams)) {
      const imgURL = `${imgFilterURL}/${streams[indexPosition]?.backdrop_path}`;

      dispatch(setBackdropImageAXN(imgURL));

      utils
        .getAverageColor(imgURL)
        .then((color) => {
          // Do something
          console.log(color);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [streams]);

  return {
    networkId,
    streams,
    indexPosition,
    description,
    currentMedia,
    networkName,
    contentRating,
    contentDuration,
    backdropImage,
  };
};

export default useHero;
