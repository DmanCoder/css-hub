import React from 'react';

import { IHomeProps } from '../pages/Home/Home.types';

export type ComponentTypes = IHomeProps;

export type RoutePathNamesTypes = '/' | '/tv-shows' | '/movies' | '*' | '/media-details';

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
