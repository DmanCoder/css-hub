import { ActionTypes } from '../../actions';
import { IThemeDispatchTypes } from '../../actions/themeActions/themeActions.types';

const defaultState = false;

const countryReducer = (state = defaultState, action: IThemeDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.CHANGE_APP_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
