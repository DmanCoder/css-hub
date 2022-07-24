import { ActionTypes } from '../../actions';
import { ILoadingDispatchTypes } from '../../actions/loadingActions/loadingActions.types';

const defaultState: false | true = false;

const loadingReducer = (state = defaultState, action: ILoadingDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.LOADING_TOGGLE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
