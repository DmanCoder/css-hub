import { ActionTypes } from '../../actions';
import { PopularDispatchTypes } from '../../actions/popularActions/popularActions.types';
import { IDefaultState } from './popularReducer.types';

const defaultState: IDefaultState = {
  tvShows: [],
  streams: [],
  rents: [],
  movies: [],
};

const popularReducer = (state = defaultState, action: PopularDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_TV_SHOWS:
      return {
        ...state,
        tvShows: action.payload,
      };
    case ActionTypes.GET_POPULAR_STREAMS:
      return {
        ...state,
        streams: action.payload,
      };
    case ActionTypes.GET_POPULAR_RENT:
      return {
        ...state,
        rents: action.payload,
      };
    case ActionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default popularReducer;
