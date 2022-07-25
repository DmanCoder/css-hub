import { Dispatch } from 'redux';
import { ActionTypes } from '..';
import { IChangeCountry } from './countryActions.types';

export const changeCountryAXN = (country: string) => (dispatch: Dispatch<IChangeCountry>) =>
  dispatch({
    type: ActionTypes.CHANGE_COUNTRY,
    payload: country,
  });
