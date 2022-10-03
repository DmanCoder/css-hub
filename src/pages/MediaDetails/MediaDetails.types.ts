import { Params } from 'react-router-dom';
import { MediaProductionType } from '../../typescriptGlobals/types';

export interface IMediaDetailsProps {}

export type ParamsTypes = { media_type: MediaProductionType; media_id: number };

export type UseMediaDetailsReturnTypes = {
  params: Readonly<Params<string>>;
};
