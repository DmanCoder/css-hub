import { ActionTypes } from '../../actions';
import { IMediaDetailDispatchTypes } from '../../actions/mediaDetailsActions/mediaDetailsActions.types';
import { IMediaDetailsDefaultState } from './mediaDetailReducer.types';

const defaultState: IMediaDetailsDefaultState = {
  current: [],
  indexPosition: 0,
  images: [],
};

const mediaDetailReducer = (state = defaultState, action: IMediaDetailDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_MEDIA_DETAILS:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypes.MEDIA_DETAILS_RANDOM_NUMBER:
      return {
        ...state,
        indexPosition: action.payload,
      };
    case ActionTypes.MEDIA_DETAILS_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default mediaDetailReducer;
