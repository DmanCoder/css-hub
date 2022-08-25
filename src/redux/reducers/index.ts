import { combineReducers } from 'redux';

import mediaDetailsReducer from './mediaReducer';
import languageReducer from './languageReducer/languageReducer';
import popularReducer from './popularReducer';
import mediaDetailReducer from './mediaDetailsReducer/mediaDetailReducer';
import loadingReducer from './loadingReducer/loadingReducer';
import countryReducer from './countryReducer/countryReducer';
import errorsFeedbackAXN from './errors/errorsReducer';
import windowDimensionReducer from './windowDimension/windowDimensionReducer';
import streamingServicesReducer from './streamingServicesReducer/streamingServicesReducer';

const rootReducer = combineReducers({
  mediaRXS: mediaDetailsReducer,
  languageRXS: languageReducer,
  loadingRXS: loadingReducer,
  countryRXS: countryReducer,
  errorsRXS: errorsFeedbackAXN,
  windowDimensionRXS: windowDimensionReducer,
  popularRXS: popularReducer,
  detailsRXS: mediaDetailReducer,
  networkRXS: streamingServicesReducer,
});

export default rootReducer;
