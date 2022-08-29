import { ActionTypes } from '..';
import { ContentRatingsForTvShows, MediaDetails } from '../popularActions/popularActions.types';

export interface IMediaDetails {
  type: ActionTypes.GET_MEDIA_DETAILS;
  payload: MediaDetails;
}
export interface IContentRatingsForTvShows {
  type: ActionTypes.GET_MEDIA_CONTENT_RATINGS;
  payload: ContentRatingsForTvShows[];
}
export interface IMediaDetailsRandomNumberAction {
  type: ActionTypes.MEDIA_DETAILS_RANDOM_NUMBER;
  payload: number;
}
export interface IMediaDetailsImagesAction {
  type: ActionTypes.MEDIA_DETAILS_IMAGES;
  payload: number;
}
export type IMediaDetailDispatchTypes =
  | IMediaDetails
  | IContentRatingsForTvShows
  | IMediaDetailsRandomNumberAction
  | IMediaDetailsImagesAction;
