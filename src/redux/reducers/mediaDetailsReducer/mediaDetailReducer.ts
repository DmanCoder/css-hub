import { MediaDetailsTypes } from '../../../typescriptGlobals/types';
import { ActionTypes } from '../../actions';
import { IMediaDetailDispatchTypes } from '../../actions/mediaDetailsActions/mediaDetailsActions.types';
import { IMediaDetailsDefaultState } from './mediaDetailReducer.types';

const defaultState: IMediaDetailsDefaultState = {
  currentMedia: {} as MediaDetailsTypes,
  indexPosition: 0,
  images: [],
};

const mediaDetailReducer = (
  state = defaultState,
  action: IMediaDetailDispatchTypes,
): IMediaDetailsDefaultState => {
  switch (action.type) {
    case ActionTypes.GET_CURRENT_MEDIA_DETAILS:
      return {
        ...state,
        currentMedia: action.payload,
      };
    case ActionTypes.MEDIA_DETAILS_RANDOM_NUMBER:
      return {
        ...state,
        indexPosition: action.payload,
      };
    case ActionTypes.MEDIA_DETAILS_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default mediaDetailReducer;
