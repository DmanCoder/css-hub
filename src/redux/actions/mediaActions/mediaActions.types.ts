import { ActionTypes } from '..';
import { MediaTypes } from '../../../typescriptGlobals/types';

export interface IMediaStreamsAction {
  type: ActionTypes.GET_MEDIA_STREAMS;
  payload: MediaTypes[];
}

export type IMediaDispatchTypes = IMediaStreamsAction;
