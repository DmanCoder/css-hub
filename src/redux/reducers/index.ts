import { combineReducers } from 'redux';

import themeReducer from './themeReducer/themeReducer';
import loaderReducer from './loaderReducer/loaderReducer';
import countryReducer from './countryReducer/countryReducer';
import networksReducer from './networksReducer/networksReducer';
import languageReducer from './languageReducer/languageReducer';

const rootReducer = combineReducers({
  themeRXS: themeReducer,
  loaderRXS: loaderReducer,
  countryRXS: countryReducer,
  networkRXS: networksReducer,
  languageRXS: languageReducer,
});

export default rootReducer;
