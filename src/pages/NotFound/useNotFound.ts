import { RootState, useAppSelector } from '../../redux/store';
import { GalleryTypes } from '../../typescriptGlobals/types';
import { UseNotFoundReturnTypes } from './NotFound.types';

const useNotFound = (): UseNotFoundReturnTypes => {
  const { myList } = useAppSelector((state: RootState) => state.mediaRXS);
  const tabs: GalleryTypes[] = ['Streaming', 'On Tv', 'For Rent', 'In Theaters'];
  return { tabs, myList };
};

export default useNotFound;
