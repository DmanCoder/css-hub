import React from 'react';
import { CountryAlpha2CodeTypes, CountryFlagTypes } from '../../typescriptGlobals/types';

export interface INavProps {}

export type LongPressParamsTypes = {
  onShowCountryList: () => void;
  onPageReset: () => void;
  shouldPreventDefault?: ShouldPreventDefaultTypes;
};

export type ShouldPreventDefaultTypes = {
  isPrevented: boolean;
  delay: number;
};

export type UseTopNavigationReturnType = {
  onToggleSideNetworkDisplay: () => void;
  navWrapperRef: React.RefObject<HTMLUListElement>;
  onLongPress: object;
  onHideCountryList: () => void;
  countryRXS: CountryFlagTypes;
  onChangeCountry: (country: CountryAlpha2CodeTypes) => (event: React.MouseEvent) => void;
};
