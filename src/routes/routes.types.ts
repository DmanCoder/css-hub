import React from 'react';

import { IHomeProps } from '../pages/home/home.types';

export type ComponentTypes = IHomeProps;

export type RoutePathNamestypes = '/' | '/tv' | 'movie';

export type RouteLocationTypes = {
  hash: string;
  key: string;
  pathname: RoutePathNamestypes;
  search: string;
  state: null | string;
};

export interface IRoutes {
  path: RoutePathNamestypes;
  name: string;
  Component: React.FC<ComponentTypes>;
}
