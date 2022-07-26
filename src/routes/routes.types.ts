import React from 'react';

import { IHomeProps } from '../pages/Home/Home.types';

export type ComponentTypes = IHomeProps;

export type RoutePathNamesTypes =
  | '/'
  | '/:media_type'
  | '*'
  | '/media-details/:media_type/:media_id';

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
