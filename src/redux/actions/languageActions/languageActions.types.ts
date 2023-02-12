import { ActionTypes } from '..';

export interface ILanguage {
  type: ActionTypes.CHANGE_LANGUAGE;
  payload: string;
}

export type ILanguageDispatchTypes = ILanguage;
