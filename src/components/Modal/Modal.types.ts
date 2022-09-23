import React from 'react';

export interface IAppProps {}

export type UseAppReturnType = {
  isShowLeftNavigation: boolean;
  appWrapper: React.RefObject<HTMLDivElement>;
};

export type AdjustAppWrapperPaddingReturnType = {
  isShowLeftNavigation: boolean;
};
