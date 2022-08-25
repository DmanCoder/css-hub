import { ActionTypes } from '..';
import { MediaMovieTypes, MediaTvTypes } from '../../../typescriptGlobals/types';

export interface IMediaStreamsAction {
  type: ActionTypes.GET_MEDIA_STREAMS;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}
export interface IMediaAnimationsAction {
  type: ActionTypes.GET_MEDIA_ANIMATIONS;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export interface IMediaComedyAction {
  type: ActionTypes.GET_MEDIA_COMEDY;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export type MediaDispatchTypes = IMediaStreamsAction | IMediaAnimationsAction | IMediaComedyAction;
