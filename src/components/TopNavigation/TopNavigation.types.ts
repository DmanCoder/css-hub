import React from 'react';
export interface INavProps {}

export type OnLongPressParams = { onShowCountryList: () => void; onPageReset: () => void };

export type UseTopNavigationReturnType = {
  onToggleSideNetworkDisplay: () => void;
  navWrapperRef: React.RefObject<HTMLUListElement>;
  onLongPress: object;
};
