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

export interface IMediaActionAndAdventureAction {
  type: ActionTypes.GET_MEDIA_ACTION_AND_ADVENTURE;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export interface IMediaScifiAndFantasyAction {
  type: ActionTypes.GET_MEDIA_SCIFI_AND_FANTASY;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export interface IMediaRomanceAction {
  type: ActionTypes.GET_MEDIA_ROMANCE;
  payload: MediaMovieTypes[] | MediaTvTypes[];
}

export type MediaDispatchTypes =
  | IMediaStreamsAction
  | IMediaAnimationsAction
  | IMediaComedyAction
  | IMediaActionAndAdventureAction
  | IMediaScifiAndFantasyAction
  | IMediaRomanceAction;
