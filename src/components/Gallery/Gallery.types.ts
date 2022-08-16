import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { ButtonMouseEvent, GallerySectionTypes, GalleryTypes } from '../../typescriptGlobals/types';

export type OnSwitchBottomTabSliderAnimationParamType = {
  event: ButtonMouseEvent;
  section: GallerySectionTypes;
};

export type UseGalleryReturnType = {
  media: PopularType[];
  onTabClick: ({ tab, section }: TabParamTypes) => (event: ButtonMouseEvent) => void;
};

export interface TabParamTypes {
  tab: GalleryTypes;
  section: GallerySectionTypes;
}
export interface IGalleryProps {
  title: string;
  section: GallerySectionTypes;
  tabs: GalleryTypes[];
}
