import { RootState, useAppSelector } from '../../redux/store';
import { GalleryTypes } from '../../typescriptGlobals/types';
import { UseHomeReturnTypes } from './home.types';

const useHome = (): UseHomeReturnTypes => {
  const { myList } = useAppSelector((state: RootState) => state.popularRXS);
  const tabs: GalleryTypes[] = ['Streaming', 'On Tv', 'For Rent', 'In Theaters'];
  return { tabs, myList };
};

export default useHome;
