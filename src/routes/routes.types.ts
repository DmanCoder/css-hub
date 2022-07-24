import React from 'react';

import { IHomeProps } from '../pages/home/home.types';

export type ComponentTypes = IHomeProps;
export interface IRoutes {
  path: string;
  name: string;
  Component: React.FC<ComponentTypes>;
}
