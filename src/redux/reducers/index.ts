import { combineReducers } from 'redux';

import languageReducer from './languageReducer/loadingReducer';
import popularReducer from './popularReducer';
import mediaDetailReducer from './mediaDetailsReducer/mediaDetailReducer';
import loadingReducer from './loadingReducer/loadingReducer';
import errorsFeedbackAXN from './errors/errorsReducer';
import windowDimensionReducer from './windowDimension/windowDimensionReducer';
import streamingServicesReducer from './streamingServicesReducer/streamingServicesReducer';

const rootReducer = combineReducers({
  languageRXS: languageReducer,
  loadingRXS: loadingReducer,
  errorsRXS: errorsFeedbackAXN,
  windowDimensionRXS: windowDimensionReducer,
  popularRXS: popularReducer,
  detailsRXS: mediaDetailReducer,
  networkRXS: streamingServicesReducer,
});

export default rootReducer;
