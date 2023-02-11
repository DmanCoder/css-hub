import React from 'react';

export interface ILoaderProps {}

export type UseAnimateLoaderReturnTypes = {
  loaderRef: React.RefObject<HTMLDivElement>;
  dotsRef: React.MutableRefObject<HTMLDivElement[]>;
  taglineRef: React.RefObject<HTMLSpanElement>;
};
