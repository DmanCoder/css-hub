import { ActionTypes } from '../../actions';
import { ICountryDispatchTypes } from '../../actions/countryActions/countryActions.types';
import { IDefaultState } from './countryReducer.types';

const defaultState: IDefaultState = {
  name: 'Australia Flag',
  url: 'australia.png',
};

const countryReducer = (state = defaultState, action: ICountryDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.CHANGE_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
