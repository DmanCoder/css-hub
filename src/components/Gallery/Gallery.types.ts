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

export type OnViewMediaParams = {
  media: MediaTypes;
};

export type UseGalleryReturnType = {
  networkId: NetworkIdTypes;
  media: MediaTypes[];
  onTabClick: ({ tab, section }: TabParamTypes) => (event: ButtonMouseEvent) => void;
  onViewMedia: ({
    media,
  }: OnViewMediaParams) => (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onNavigateTo: ({ pathTo }: NavigateParamsTypes) => () => void;
};

export interface TabParamTypes {
  tab: GalleryTypes;
  section: GalleryTypes;
}
export interface IGalleryProps {
  title: string;
  section: GalleryTypes;
}

export type NavigateParamsTypes = {
  pathTo: string; // TODO: FIX TYPE - ROUTE TYPE
};
