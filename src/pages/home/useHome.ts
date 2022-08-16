import { GalleryTypes } from '../../typescriptGlobals/types';
import { UseHomeReturnTypes } from './home.types';

const useHome = (): UseHomeReturnTypes => {
  const tabs: GalleryTypes[] = ['Streaming', 'On Tv', 'For Rent', 'In Theaters'];
  return { tabs };
};

export default useHome;
