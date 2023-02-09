import { combineReducers } from 'redux';

import themeReducer from './themeReducer/themeReducer';

const rootReducer = combineReducers({
  themeRXS: themeReducer,
});

export default rootReducer;
