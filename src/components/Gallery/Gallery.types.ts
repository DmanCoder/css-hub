import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { ButtonMouseEvent, GalleryTypes, NetworkIdTypes } from '../../typescriptGlobals/types';

export type OnSwitchBottomTabSliderAnimationParamType = {
  event: ButtonMouseEvent;
  section: GalleryTypes;
};

export type UseGalleryParamTypes = {
  section: GalleryTypes;
};

export type UseGalleryReturnType = {
  networkId: NetworkIdTypes;
  media: PopularType[];
  onTabClick: ({ tab, section }: TabParamTypes) => (event: ButtonMouseEvent) => void;
};

export interface TabParamTypes {
  tab: GalleryTypes;
  section: GalleryTypes;
}
export interface IGalleryProps {
  title: string;
  section: GalleryTypes;
  tabs: GalleryTypes[];
}
