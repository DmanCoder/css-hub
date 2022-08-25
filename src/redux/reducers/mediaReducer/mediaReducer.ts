import { ActionTypes } from '../../actions';
import { MediaDispatchTypes } from '../../actions/mediaActions/mediaActions.types';
import { IMediaDefaultState } from './mediaReducer.types';

const defaultState: IMediaDefaultState = {
  animations: [],
};

const mediaReducer = (state = defaultState, action: MediaDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_MEDIA_ANIMATIONS:
      return {
        ...state,
        animations: action.payload,
      };
    default:
      return state;
  }
};

export default mediaReducer;
