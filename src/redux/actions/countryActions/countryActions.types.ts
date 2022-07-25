import { ActionTypes } from '..';

export interface IChangeCountry {
  type: ActionTypes.CHANGE_COUNTRY;
  payload: string;
}

export type ICountryDispatchTypes = IChangeCountry;
