import { ActionTypes } from '../../actions';
import { IMediaDetailDispatchTypes } from '../../actions/mediaDetailsActions/mediaDetailsActions.types';
import { MediaDetails } from '../../actions/popularActions/popularActions.types';

const defaultState = {} as MediaDetails;

const detailReducer = (state = defaultState, action: IMediaDetailDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.GET_MEDIA_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default detailReducer;
