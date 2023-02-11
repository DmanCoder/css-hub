import { combineReducers } from 'redux';

import themeReducer from './themeReducer/themeReducer';
import loaderReducer from './loaderReducer/loaderReducer';

const rootReducer = combineReducers({
  themeRXS: themeReducer,
  loaderRXS: loaderReducer,
});

export default rootReducer;
