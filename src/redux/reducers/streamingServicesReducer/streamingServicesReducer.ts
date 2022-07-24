import { ActionTypes } from '../../actions';
import { StreamingServicesDispatchTypes } from '../../actions/streamingServicesActions/streamingServicesActions.types';
import { NETFLIX_NETWORK_ID } from '../../../typescriptGlobals/constants';
import { IDefaultState } from './streamingServicesReducer.types';

const defaultState: IDefaultState = {
  networkId: NETFLIX_NETWORK_ID,
  isShowLeftNavigation: false,
};

const streamingServicesReducer = (state = defaultState, action: StreamingServicesDispatchTypes) => {
  switch (action.type) {
    case ActionTypes.SWITCH_BETWEEN_NETWORK_ID:
      return {
        ...state,
        networkId: action.payload,
      };
    case ActionTypes.TOGGLE_LEFT_NAVIGATION:
      return {
        ...state,
        isShowLeftNavigation: action.payload,
      };
    default:
      return state;
  }
};

export default streamingServicesReducer;
