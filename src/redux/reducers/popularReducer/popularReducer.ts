import { ActionTypes } from '../../actions';
import { PopularDispatchTypes } from '../../actions/popularActions/popularActions.types';
import { IPopularDefaultState } from './popularReducer.types';

const defaultState: IPopularDefaultState = {
  streams: [],
  tvShows: [],
  trending: [],
  upcoming: [],
  anime: [],
  animations: [],
  myList: [],
  indexPosition: 0,
};

const popularReducer = (state = defaultState, action: PopularDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    case ActionTypes.GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case ActionTypes.GET_TRENDING:
      return {
        ...state,
        trending: action.payload,
      };
    case ActionTypes.GET_MEDIA_UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
      };
    case ActionTypes.GET_MY_MEDIA_LIST:
      return {
        ...state,
        myList: action.payload,
      };
    case ActionTypes.GET_MEDIA_ANIME:
      return {
        ...state,
        anime: action.payload,
      };
    case ActionTypes.GET_MEDIA_ANIMATIONS:
      return {
        ...state,
        animations: action.payload,
      };
    case ActionTypes.RANDOM_NUMBER:
      return {
        ...state,
        indexPosition: action.payload,
      };
    default:
      return state;
  }
};

export default popularReducer;
