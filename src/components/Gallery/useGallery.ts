import React from 'react';
import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { RootState, useAppSelector } from '../../redux/store';
import { UseGalleryReturnType } from './Gallery.types';

const useGallery = (): UseGalleryReturnType => {
  const { streams } = useAppSelector((state: RootState) => state.popularRXS);
  const [media, setMedia] = React.useState<PopularType[]>([]);

  React.useEffect(() => {
    // Do somthing
    setMedia(streams);
  }, [streams]);

  return { media };
};

export default useGallery;
