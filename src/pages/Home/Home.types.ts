import { GalleryTypes, MediaTypes } from '../../typescriptGlobals/types';

export interface IHomeProps {}

export type UseHomeReturnTypes = {
  myList: MediaTypes[];
  tabs: GalleryTypes[];
  horror: MediaTypes[];
  romance: MediaTypes[];
  crime: MediaTypes[];
  streams: MediaTypes[];
  animations: MediaTypes[];
  action: MediaTypes[];
  scifi: MediaTypes[];
  comedy: MediaTypes[];
};
