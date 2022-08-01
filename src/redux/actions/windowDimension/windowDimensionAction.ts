import { ActionTypes } from '..';
import { WindowDimensionType } from './windowDimensionAction.types';

export const updateWindowDimensionAXN = (dimension: WindowDimensionType) => {
  return {
    type: ActionTypes.UPDATE_WINDOW_DIMENSION,
    payload: dimension,
  };
};
