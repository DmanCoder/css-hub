import { RootState, useAppSelector } from '../../redux/store';
import { UseHeroGalleryReturnType } from './HeroGallery.types';

const useHeroGallery = (): UseHeroGalleryReturnType => {
  const { images } = useAppSelector((state: RootState) => state.detailsRXS);

  return {
    images,
  };
};

export default useHeroGallery;
