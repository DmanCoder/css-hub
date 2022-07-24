import { Dispatch } from 'redux';
import { ActionTypes } from '..';

import { IErrorFeedback } from './errorsActions.types';

export const errorsFeedbackAXN = (errors: object) => (dispatch: Dispatch<IErrorFeedback>) =>
  dispatch({
    type: ActionTypes.ERROR_FEEDBACK,
    payload: errors,
  });
