import { ActionTypes } from '..';
import { CountryFlagTypes } from '../../../typescriptGlobals/types';

export interface IChangeCountry {
  type: ActionTypes.CHANGE_COUNTRY;
  payload: CountryFlagTypes;
}

export type ICountryDispatchTypes = IChangeCountry;
