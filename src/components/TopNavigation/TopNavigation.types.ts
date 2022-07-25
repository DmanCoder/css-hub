import React from 'react';
export interface INavProps {}

export type LongPressParamsTypes = {
  onShowCountryList: (event: any) => void;
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
};
