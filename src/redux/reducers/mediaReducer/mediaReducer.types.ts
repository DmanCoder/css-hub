import { MediaMovieTypes, MediaTvTypes } from '../../../typescriptGlobals/types';

export interface IMediaDefaultState {
  streams: MediaTvTypes[] | MediaMovieTypes[];
  animations: MediaTvTypes[] | MediaMovieTypes[];
  comedy: MediaTvTypes[] | MediaMovieTypes[];
  action: MediaTvTypes[] | MediaMovieTypes[];
  scifi: MediaTvTypes[] | MediaMovieTypes[];
  romance: MediaTvTypes[] | MediaMovieTypes[];
  crime: MediaTvTypes[] | MediaMovieTypes[];
  horror: MediaTvTypes[] | MediaMovieTypes[];
}
