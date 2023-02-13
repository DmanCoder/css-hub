import { ActionTypes } from '../../actions';
import { ILoaderDispatchTypes } from '../../actions/loaderActions/loaderActions.types';
import { IDefaultState } from './loaderReducer.types';

const defaultState: IDefaultState = {
  isAppLoading: false,
  isLoaderDoneAnimating: false,
};

const loaderReducer = (state = defaultState, action: ILoaderDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_LOADER:
      return {
        ...state,
        isAppLoading: action.payload,
      };
    case ActionTypes.LOADER_PROGRESS_TOGGLE:
      return {
        ...state,
        isLoaderDoneAnimating: action.payload,
      };
    default:
      return state;
  }
};

export default loaderReducer;
