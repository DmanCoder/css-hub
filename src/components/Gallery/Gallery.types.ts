import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { ButtonMouseEvent } from '../../typescriptGlobals/types';

export type Tab = {
  name: string;
  key: string;
};
export type OnSwitchBottomTabSliderAnimationParamType = {
  event: ButtonMouseEvent;
  section: string;
};

export type UseGalleryReturnType = {
  media: PopularType[];
};

export interface IGalleryProps {
  title: string;
  section: string;
  tabs: Tab[];
}
