import { ActionTypes } from '../../actions';
import { PopularDispatchTypes } from '../../actions/popularActions/popularActions.types';
import { IPopularDefaultState } from './popularReducer.types';

const defaultState: IPopularDefaultState = {
  streams: [],
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
