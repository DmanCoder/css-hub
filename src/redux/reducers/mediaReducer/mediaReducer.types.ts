import { MediaMovieTypes, MediaTvTypes } from '../../../typescriptGlobals/types';

export interface IMediaDefaultState {
  animations: MediaTvTypes[] | MediaMovieTypes[];
}
