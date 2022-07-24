import { ActionTypes } from '..';

export interface INetworkMode {
  type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID;
  payload: number;
}

export interface IToggleLeftNavigation {
  type: ActionTypes.TOGGLE_LEFT_NAVIGATION;
  payload: boolean;
}

export type StreamingServicesDispatchTypes = INetworkMode | IToggleLeftNavigation;

export type ToggleLeftSideNavParamType = { boolean: boolean };
