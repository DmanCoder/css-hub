import { ActionTypes } from '../../actions';
import { MediaDispatchTypes } from '../../actions/mediaActions/mediaActions.types';
import { IMediaDefaultState } from './mediaReducer.types';

const defaultState: IMediaDefaultState = {
  streams: [],
  animations: [],
  comedy: [],
  action: [],
};

const mediaReducer = (state = defaultState, action: MediaDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_MEDIA_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    case ActionTypes.GET_MEDIA_ANIMATIONS:
      return {
        ...state,
        animations: action.payload,
      };
    case ActionTypes.GET_MEDIA_COMEDY:
      return {
        ...state,
        comedy: action.payload,
      };
    case ActionTypes.GET_MEDIA_ACTION_AND_ADVENTURE:
      return {
        ...state,
        action: action.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;
