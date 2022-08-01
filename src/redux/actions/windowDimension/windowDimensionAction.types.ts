import { ActionTypes } from '..';

export type WindowDimensionType = {
  width: number;
  height: number;
};

// INTERFACE
export interface IWindowDimension {
  type: ActionTypes.UPDATE_WINDOW_DIMENSION;
  payload: WindowDimensionType;
}

// ALL TV REDUCER DISPATCH TYPES
export type WindowDimensionDispatchTypes = IWindowDimension;
