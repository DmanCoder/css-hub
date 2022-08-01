import { ActionTypes } from '..';
import { NetworkIdTypes } from '../../../typescriptGlobals/types';

export type INetworkMode = {
  type: ActionTypes.SWITCH_BETWEEN_NETWORK_ID;
  payload: NetworkIdTypes;
};
export interface IToggleLeftNavigation {
  type: ActionTypes.TOGGLE_LEFT_NAVIGATION;
  payload: boolean;
}

export type StreamingServicesDispatchTypes = INetworkMode | IToggleLeftNavigation;

export type ToggleLeftSideNavParamType = { boolean: boolean };
