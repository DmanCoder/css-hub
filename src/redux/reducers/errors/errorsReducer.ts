import { ActionTypes } from '../../actions';
import { IErrorFeedback } from '../../actions/errorsActions/errorsActions.types';

const defaultState: object = {};

const loadingReducer = (state = defaultState, action: IErrorFeedback) => {
  switch (action.type) {
    case ActionTypes.ERROR_FEEDBACK:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
