import React from 'react';

import { IHomeProps } from '../pages/Home/Home.types';

export const PATHS = [
  '/',
  '/tv-shows',
  '/tv-shows/:id',
  '/movies',
  '/movies/:id',
  '/people',
  '/people/:id',
  '/my-list',
] as const;

export type ComponentTypes = IHomeProps;

export type RoutePathNamesTypes = '/' | '/tv-shows' | '/movies' | '/people' | '/my-list';

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
  containParam?: boolean;
  Component: React.FC<ComponentTypes>;
}
