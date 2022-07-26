import { ActionTypes } from '..';
import { CountryAlpha2CodeTypes } from '../../../typescriptGlobals/types';
import utils from '../../../utils';
import { IChangeCountry } from './countryActions.types';

export const changeCountryAXN = (country: CountryAlpha2CodeTypes): IChangeCountry => {
  switch (country) {
    case 'UK':
      utils.saveToLocalStorage({
        key: 'selectedCountry',
        value: {
          name: 'United Kingdom Flag',
          url: 'united-kingdom.png',
          iso: 'UK',
        },
      });
      return {
        type: ActionTypes.CHANGE_COUNTRY,
        payload: {
          name: 'United Kingdom Flag',
          url: 'united-kingdom.png',
          iso: 'UK',
        },
      };
    case 'CA':
      return {
        type: ActionTypes.CHANGE_COUNTRY,
        payload: {
          name: 'Canada Flag',
          url: 'canada.png',
          iso: 'AU',
        },
      };
    case 'US':
      return {
        type: ActionTypes.CHANGE_COUNTRY,
        payload: {
          name: 'United Stats Flag',
          url: 'united-states.png',
          iso: 'UN',
        },
      };
    case 'AU':
      return {
        type: ActionTypes.CHANGE_COUNTRY,
        payload: {
          name: 'Australia Flag',
          url: 'australia.png',
          iso: 'AU',
        },
      };
    default:
      return {
        type: ActionTypes.CHANGE_COUNTRY,
        payload: {
          name: '',
          url: '',
          iso: '',
        },
      };
  }
};
