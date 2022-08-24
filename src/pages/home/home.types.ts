import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { GalleryTypes } from '../../typescriptGlobals/types';

export interface IHomeProps {}

export type UseHomeReturnTypes = {
  myList: PopularType[];
  tabs: GalleryTypes[];
};
