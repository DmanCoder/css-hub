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

export type IMediaDetailDispatchTypes = IMediaDetails | IContentRatingsForTvShows;
