import { store } from '../redux/store';
import { saveSelectedCountryAXN } from '../redux/actions/countryActions/countryActions';
import { CountryFlagTypes } from '../typescriptGlobals/types';

export const rehydrateSelectedCountry = () => {
  const selectedCountry: null | string = window.localStorage.getItem('selectedCountry');

  if (selectedCountry) {
    const parsed: CountryFlagTypes = JSON.parse(selectedCountry);
    store.dispatch(saveSelectedCountryAXN(parsed));
  }
};
