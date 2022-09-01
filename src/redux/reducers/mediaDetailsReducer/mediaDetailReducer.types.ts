import { MediaDetailsTypes } from '../../../typescriptGlobals/types';

export interface IMediaDetailsDefaultState {
  backdropImage: string;
  currentMedia: MediaDetailsTypes;
  indexPosition: number;
  images: string[]; // TODO COME BACK TO THIS
}
