import {
  ButtonMouseEvent,
  GalleryTypes,
  MediaTypes,
  NetworkIdTypes,
} from '../../typescriptGlobals/types';

export type OnSwitchBottomTabSliderAnimationParamType = {
  event: ButtonMouseEvent;
  section: GalleryTypes;
};

export type UseGalleryParamTypes = {
  section: GalleryTypes;
};

export type UseGalleryReturnType = {
  networkId: NetworkIdTypes;
  media: MediaTypes[];
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
