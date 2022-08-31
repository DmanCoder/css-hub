import { ActionTypes } from '..';
import { CombinedMediaDetailsTypes } from '../../../typescriptGlobals/types';
import { ContentRatingsForTvShows } from '../popularActions/popularActions.types';

export interface IMediaDetails {
  type: ActionTypes.GET_CURRENT_MEDIA_DETAILS;
  payload: CombinedMediaDetailsTypes;
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
  payload: string[]; // TODO: FIX TYPE LATER
}
export type IMediaDetailDispatchTypes =
  | IMediaDetails
  | IContentRatingsForTvShows
  | IMediaDetailsRandomNumberAction
  | IMediaDetailsImagesAction;
