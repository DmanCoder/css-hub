import { CountryFlagTypes } from '../../../typescriptGlobals/types';
import { ActionTypes } from '../../actions';
import { ICountryDispatchTypes } from '../../actions/countryActions/countryActions.types';

const defaultState: CountryFlagTypes = {
  name: 'United States Flag',
  fileName: 'united-states.png',
  iso: 'US',
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
