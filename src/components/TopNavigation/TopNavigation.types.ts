import React from 'react';
export interface INavProps {}

export type UseTopNavigationReturnType = {
  onToggleSideNetworkDisplay: () => void;
  navWrapperRef: React.RefObject<HTMLUListElement>;
  onPageReset: () => void;
};
