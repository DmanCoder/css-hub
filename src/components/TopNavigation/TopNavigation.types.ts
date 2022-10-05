import React from 'react';
import { RoutePathNamesTypes } from '../../routes/routes.types';
import {
  CountryAlpha2CodeTypes,
  CountryFlagTypes,
  LanguageCodeTypes,
} from '../../typescriptGlobals/types';

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
  languageRXS: LanguageCodeTypes;
  onChangeCountry: (country: CountryAlpha2CodeTypes) => (event: React.MouseEvent) => void;
  onNavigateToPath: (path: any) => (event: React.MouseEvent) => void; // TODO: FIX TYPE
  onShowLanguageList: () => void;
  languageRef: any; // TODO: FIX THIS
  onChangeAppLanguage: (lang: LanguageCodeTypes) => (event: React.MouseEvent) => void;
};
