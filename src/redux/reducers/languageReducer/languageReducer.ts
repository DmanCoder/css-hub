import { ActionTypes } from '../../actions';
import { ILanguageDispatchTypes } from '../../actions/languageActions/languageActions.types';

const defaultState = 'en-US';

const languageReducer = (state = defaultState, action: ILanguageDispatchTypes): string => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

export default languageReducer;
