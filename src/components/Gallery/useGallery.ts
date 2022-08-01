import { RootStore, useAppSelector } from '../../redux/store';
import { UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const { streams } = useAppSelector((state: RootStore) => state.popularRXS);
  return { streams };
};

export default useGallery;
