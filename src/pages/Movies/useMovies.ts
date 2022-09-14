import { RootState, useAppSelector } from '../../redux/store';
import { GalleryTypes } from '../../typescriptGlobals/types';
import { UseMoviesReturnTypes } from './Movies.types';

const useMovies = (): UseMoviesReturnTypes => {
  const { myList } = useAppSelector((state: RootState) => state.mediaRXS);
  const tabs: GalleryTypes[] = ['Streaming', 'On Tv', 'For Rent', 'In Theaters'];
  return { tabs, myList };
};

export default useMovies;
