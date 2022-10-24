import { MediaAverageColorTypes, MediaDetailsTypes } from '../../../typescriptGlobals/types';
import { ActionTypes } from '../../actions';
import { IMediaDetailDispatchTypes } from '../../actions/mediaDetailsActions/mediaDetailsActions.types';
import { IMediaDetailsDefaultState } from './mediaDetailReducer.types';

const defaultState: IMediaDetailsDefaultState = {
  backdropImage: '',
  averageColor: {} as MediaAverageColorTypes,
  currentMedia: {} as MediaDetailsTypes,
  indexPosition: null,
  images: [],
};

const mediaDetailReducer = (
  state = defaultState,
  action: IMediaDetailDispatchTypes,
): IMediaDetailsDefaultState => {
  switch (action.type) {
    case ActionTypes.SET_MEDIA_DETAILS_AVERAGE_COLOR:
      return {
        ...state,
        averageColor: action.payload,
      };
    case ActionTypes.SET_BACKDROP_IMAGE:
      return {
        ...state,
        backdropImage: action.payload,
      };
    case ActionTypes.GET_MEDIA_DETAILS:
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
    case ActionTypes.GET_MEDIA_CONTENT_RATINGS:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default mediaDetailReducer;
