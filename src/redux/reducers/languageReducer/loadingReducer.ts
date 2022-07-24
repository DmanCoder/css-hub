import { ActionTypes } from '../../actions';
import { ILanguageDispatchTypes } from '../../actions/languageActions/languageActions.types';

const defaultState = 'en-US';

const loadingReducer = (state = defaultState, action: ILanguageDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
