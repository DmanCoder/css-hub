import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const { streams } = useSelector((state: RootStore) => state.popularRXS);
  return { streams };
};

export default useGallery;
