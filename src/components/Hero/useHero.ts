import { RootState, useAppSelector, useAppDispatch } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import { returnContentDuration, returnContentRating, returnNetworkName } from './Hero.helpers';
import utils from '../../utils';
import { imgFilterURL } from '../../api/init';
import React from 'react';
import {
  setAverageBackgroundColorAXN,
  setBackdropImageAXN,
} from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';

const useHero = (): UseHeroReturnType => {
  const dispatch = useAppDispatch();

  const { streams } = useAppSelector((state: RootState) => state.mediaRXS);
  const { networkId } = useAppSelector((state: RootState) => state.networkRXS);
  const { currentMedia, indexPosition, backdropImage } = useAppSelector(
    (state: RootState) => state.detailsRXS,
  );

  const placeholder = utils.translate('translateHero.placeholderDescription');
  const description: string = currentMedia?.overview || placeholder;

  const networkName = returnNetworkName({
    currentMedia,
    networkId,
  });

  const contentRating = returnContentRating({ currentMedia });

  const contentDuration = returnContentDuration({
    currentMedia,
  });

  React.useEffect(() => {
    if (!utils.isEmpty(currentMedia)) {
      const imgURL = `${imgFilterURL}/${currentMedia?.backdrop_path}`;

      dispatch(setBackdropImageAXN(imgURL));

      utils
        .getAverageColor(imgURL)
        .then((color) => {
          dispatch(setAverageBackgroundColorAXN(color));
          // Do something
          console.log(color);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [currentMedia]);

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
