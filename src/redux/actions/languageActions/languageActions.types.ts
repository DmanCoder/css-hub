import { ActionTypes } from '..';

export interface ILanguage {
  type: ActionTypes.CHANGE_LANGUAGE;
  payload: boolean;
}

export type ILanguageDispatchTypes = ILanguage;
