import { ActionTypes } from '..';

export const updateWindowDimensionAXN = (dimension: { width: number; height: number }) => {
  return {
    type: ActionTypes.UPDATE_WINDOW_DIMENSION,
    payload: dimension,
  };
};
