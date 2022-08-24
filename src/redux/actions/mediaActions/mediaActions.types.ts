import { ActionTypes } from '..';
import { MediaMovieTypes, MediaTvTypes } from '../../../typescriptGlobals/types';

export interface IMediaAnimationsAction {
  type: ActionTypes.GET_MEDIA_ANIMATIONS;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export type MediaDispatchTypes = IMediaAnimationsAction;
