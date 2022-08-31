import { ActionTypes } from '..';
import { MediaTypes } from '../../../typescriptGlobals/types';

export interface IMediaStreamsAction {
  type: ActionTypes.GET_MEDIA_STREAMS;
  payload: MediaTypes[];
}
export interface IMediaAnimationsAction {
  type: ActionTypes.GET_MEDIA_ANIMATIONS;
  payload: MediaTypes[];
}

export interface IMediaComedyAction {
  type: ActionTypes.GET_MEDIA_COMEDY;
  payload: MediaTypes[];
}

export interface IMediaActionAndAdventureAction {
  type: ActionTypes.GET_MEDIA_ACTION_AND_ADVENTURE;
  payload: MediaTypes[];
}

export interface IMediaScifiAndFantasyAction {
  type: ActionTypes.GET_MEDIA_SCIFI_AND_FANTASY;
  payload: MediaTypes[];
}

export interface IMediaRomanceAction {
  type: ActionTypes.GET_MEDIA_ROMANCE;
  payload: MediaTypes[];
}

export interface IMediaCrimeAction {
  type: ActionTypes.GET_MEDIA_CRIME;
  payload: MediaTypes[];
}

export interface IMediaHorrorAction {
  type: ActionTypes.GET_MEDIA_HORROR;
  payload: MediaTypes[];
}

export type MediaDispatchTypes =
  | IMediaStreamsAction
  | IMediaAnimationsAction
  | IMediaComedyAction
  | IMediaActionAndAdventureAction
  | IMediaScifiAndFantasyAction
  | IMediaRomanceAction
  | IMediaCrimeAction
  | IMediaHorrorAction;
