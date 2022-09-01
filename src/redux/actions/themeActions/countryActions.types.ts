import { ActionTypes } from '..';
import { CountryFlagTypes } from '../../../typescriptGlobals/types';

export interface ISetAverageColor {
  type: ActionTypes.CHANGE_COUNTRY;
  payload: CountryFlagTypes;
}

export type ICountryDispatchTypes = ISetAverageColor;
