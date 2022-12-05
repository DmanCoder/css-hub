import {
  MediaAverageColorTypes,
  MediaDetailsImagesTypes,
  MediaDetailsTypes,
} from '../../../typescriptGlobals/types';

export interface IMediaDetailsDefaultState {
  backdropImage: string;
  averageColor: MediaAverageColorTypes;
  currentMedia: MediaDetailsTypes;
  indexPosition: null | number;
  images: MediaDetailsImagesTypes;
}
