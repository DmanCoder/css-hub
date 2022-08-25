import { MediaMovieTypes, MediaTvTypes } from '../../../typescriptGlobals/types';

export interface IMediaDefaultState {
  streams: MediaTvTypes[] | MediaMovieTypes[];
  animations: MediaTvTypes[] | MediaMovieTypes[];
  comedy: MediaTvTypes[] | MediaMovieTypes[];
}
