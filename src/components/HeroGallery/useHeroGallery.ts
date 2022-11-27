import React from 'react';
import { useParams } from 'react-router-dom';
import utils from '../../utils';
import { UseHeroGalleryReturnType } from './HeroGallery.types';

const useHeroGallery = (): UseHeroGalleryReturnType => {
  const params = useParams();
  console.log(params, 'paramsparamsparamsparamsparams');

  React.useEffect(() => {
    const galleryHeight = !utils.isEmpty(params) ? 100 : 100;
    document.documentElement.style.setProperty('--gh', `${galleryHeight}`); // Set Gallery Height
  }, []);

  return {
    test: '',
  };
};

export default useHeroGallery;
