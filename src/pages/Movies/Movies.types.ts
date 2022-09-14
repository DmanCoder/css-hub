import { GalleryTypes, MediaTypes } from '../../typescriptGlobals/types';

export interface IMoviesProps {}

export type UseMoviesReturnTypes = {
  myList: MediaTypes[];
  tabs: GalleryTypes[];
};
