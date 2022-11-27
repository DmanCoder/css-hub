import { useParams } from 'react-router-dom';

import { RootState, useAppSelector, useAppDispatch } from '../../redux/store';
import { UseHeroReturnType } from './Hero.types';

import { returnNetworkName, onNavigateTo } from './Hero.helpers';
import utils from '../../utils';
import { imgFilterURL } from '../../api/init';
import React from 'react';
import {
  setAverageBackgroundColorAXN,
  setBackdropImageAXN,
} from '../../redux/actions/mediaDetailsActions/mediaDetailsActions';

const useHero = (): UseHeroReturnType => {
  const dispatch = useAppDispatch();
  const params = useParams();

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

  React.useEffect(() => {
    const desiredHeightForMediaDetailsPage = 90;
    const desiredHeightForHomesPage = 100;
    const galleryHeight = utils.isEmpty(params)
      ? desiredHeightForHomesPage
      : desiredHeightForMediaDetailsPage;
    document.documentElement.style.setProperty('--gh', `${galleryHeight}`); // Set Gallery Height
  }, []);

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
    backdropImage,
    onNavigateTo,
    params,
  };
};

export default useHero;
