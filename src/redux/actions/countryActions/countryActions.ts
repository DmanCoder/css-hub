import { ActionTypes } from '..';
import { CountryFlagTypes } from '../../../typescriptGlobals/types';
import { IChangeCountry } from './countryActions.types';

export const saveSelectedCountryAXN = (countryData: CountryFlagTypes): IChangeCountry => {
  return {
    type: ActionTypes.CHANGE_COUNTRY,
    payload: countryData,
  };
};
