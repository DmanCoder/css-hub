import { ActionTypes } from '../../actions';
import { WindowDimensionDispatchTypes } from '../../actions/windowDimension/windowDimensionAction.types';
import { IDefaultState } from './windowDimensionReducer.type';

const defaultState: IDefaultState = { width: 0, height: 0 };

const windowDimensionReducer = (state = defaultState, action: WindowDimensionDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.UPDATE_WINDOW_DIMENSION:
      return action.payload;
    default:
      return state;
  }
};

export default windowDimensionReducer;
