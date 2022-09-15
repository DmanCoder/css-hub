import { GalleryTypes, MediaTypes } from '../../typescriptGlobals/types';

export interface IHomeProps {}

export type UseHomeReturnTypes = {
  myList: MediaTypes[];
  tabs: GalleryTypes[];
};
