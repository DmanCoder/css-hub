import { CountryFlagTypes } from '../typescriptGlobals/types';

export const rehydrateSelectedCountry = () => {
  const selectedCountry: null | string = window.localStorage.getItem('selectedCountry');

  if (typeof selectedCountry === 'string') {
    const parsed: CountryFlagTypes = JSON.parse(selectedCountry);
    console.log(parsed, 'parsedparsedparsedparsedparsedparsedparsed');
  }
};
