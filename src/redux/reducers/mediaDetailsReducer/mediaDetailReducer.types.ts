import { MediaAverageColorTypes, MediaDetailsTypes } from '../../../typescriptGlobals/types';

export interface IMediaDetailsDefaultState {
  backdropImage: string;
  averageColor: MediaAverageColorTypes;
  currentMedia: MediaDetailsTypes;
  indexPosition: null | number;
  images: string[]; // TODO COME BACK TO THIS
}
