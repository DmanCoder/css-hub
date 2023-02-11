import { ActionTypes } from '../../actions';
import { ILoaderDispatchTypes } from '../../actions/loaderActions/loaderActions.types';

const defaultState: false | true = false;

const loaderReducer = (state = defaultState, action: ILoaderDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LOADER:
      return action.payload;
    default:
      return state;
  }
};

export default loaderReducer;
