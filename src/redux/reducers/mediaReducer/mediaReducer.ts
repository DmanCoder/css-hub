import { ActionTypes } from '../../actions';
import { MediaDispatchTypes } from '../../actions/mediaActions/mediaActions.types';
import { IMediaDefaultState } from './mediaReducer.types';

const defaultState: IMediaDefaultState = {
  streams: [],
  animations: [],
  comedy: [],
  action: [],
  scifi: [],
  romance: [],
  crime: [],
  horror: [],
  myList: [],
};

const mediaReducer = (state = defaultState, action: MediaDispatchTypes): IMediaDefaultState => {
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
    case ActionTypes.GET_MEDIA_SCIFI_AND_FANTASY:
      return {
        ...state,
        scifi: action.payload,
      };
    case ActionTypes.GET_MEDIA_ROMANCE:
      return {
        ...state,
        romance: action.payload,
      };
    case ActionTypes.GET_MEDIA_CRIME:
      return {
        ...state,
        crime: action.payload,
      };
    case ActionTypes.GET_MEDIA_HORROR:
      return {
        ...state,
        horror: action.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;
