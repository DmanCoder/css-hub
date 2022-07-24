import { ActionTypes } from '..';

export interface IErrorFeedback {
  type: ActionTypes.ERROR_FEEDBACK;
  payload: object;
}

export type IErrorFeedbackDispatchTypes = IErrorFeedback;
