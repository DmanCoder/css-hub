import { RootState, useAppSelector } from '../../redux/store';
import { UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const { streams } = useAppSelector((state: RootState) => state.popularRXS);
  return { streams };
};

export default useGallery;
