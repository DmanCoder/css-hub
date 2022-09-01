import { ActionTypes } from '..';
import { MediaAverageColorTypes, MediaDetailsTypes } from '../../../typescriptGlobals/types';

export interface ISetMediaBackdropImageAction {
  type: ActionTypes.SET_BACKDROP_IMAGE;
  payload: string;
}

export interface ISetMediaAverageColorAction {
  type: ActionTypes.SET_MEDIA_DETAILS_AVERAGE_COLOR;
  payload: MediaAverageColorTypes;
}

export interface IMediaDetailsAction {
  type: ActionTypes.GET_MEDIA_DETAILS;
  payload: MediaDetailsTypes;
}

export interface IMediaContentRatingAction {
  type: ActionTypes.GET_MEDIA_CONTENT_RATINGS;
  payload: any; // TODO: FIX THIS TYPE
}

export interface IMediaDetailsRandomNumberAction {
  type: ActionTypes.MEDIA_DETAILS_RANDOM_NUMBER;
  payload: number;
}

export interface IMediaDetailsImagesAction {
  type: ActionTypes.MEDIA_DETAILS_IMAGES;
  payload: string[]; // TODO: FIX TYPE LATER
}

export interface IMediaDetailsAction {
  type: ActionTypes.GET_MEDIA_DETAILS;
  payload: MediaDetailsTypes;
}
export type IMediaDetailDispatchTypes =
  | ISetMediaAverageColorAction
  | ISetMediaBackdropImageAction
  | IMediaDetailsAction
  | IMediaContentRatingAction
  | IMediaDetailsRandomNumberAction
  | IMediaDetailsImagesAction;
