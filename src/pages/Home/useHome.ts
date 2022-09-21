import { RootState, useAppSelector } from '../../redux/store';
import { GalleryTypes } from '../../typescriptGlobals/types';
import { UseHomeReturnTypes } from './Home.types';

const useHome = (): UseHomeReturnTypes => {
  const { myList, horror, romance, crime, streams, animations, action, scifi, comedy } =
    useAppSelector((state: RootState) => state.mediaRXS);
  const tabs: GalleryTypes[] = ['Streaming', 'On Tv', 'For Rent', 'In Theaters'];
  return { tabs, myList, horror, romance, crime, streams, animations, action, scifi, comedy };
};

export default useHome;
