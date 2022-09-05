import React from 'react';

import { IHomeProps } from '../pages/home/home.types';

export type ComponentTypes = IHomeProps;

export type RoutePathNamesTypes = '/' | '/tv' | 'movie';

export type RouteLocationTypes = {
  hash: string;
  key: string;
  pathname: RoutePathNamesTypes;
  search: string;
  state: null | string;
};

export interface IRoutes {
  path: RoutePathNamesTypes;
  name: string;
  Component: React.FC<ComponentTypes>;
}
