import { ActionTypes } from '../../actions';
import { NetworksDispatchTypes } from '../../actions/networksActions/networksActions.types';
import { NETFLIX_NETWORK_ID } from '../../../typescriptGlobals/constants';
import { IDefaultState } from './networksReducer.types';

const defaultState: IDefaultState = {
  networkId: NETFLIX_NETWORK_ID,
  isShowLeftNavigation: false,
};

const networksReducer = (state = defaultState, action: NetworksDispatchTypes) => {
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

export default networksReducer;
