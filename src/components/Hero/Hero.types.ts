import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { CombinedMediaDetailsTypes, NetworkIdTypes } from '../../typescriptGlobals/types';

export type CalculateDescriptionParamsTypes = {
  description: string;
  width: number;
};

export type CalculateDescriptionReturnTypes = {
  description: string;
};

export type ReturnNetworkNamesParamsTypes = {
  media: PopularType;
  currentMedia: any;
  networkId: NetworkIdTypes;
};

export interface IHeroProps {}

export type UseHeroReturnType = {
  networkId: NetworkIdTypes;
  streams: PopularType[];
  indexPosition: number;
  description: string;
  currentMedia: any;
  networkName: string;
  contentRating: string;
  contentDuration: string;
};

export type ContentRatingsParams = {
  currentMedia: any;
};

export type ContentDurationParamTypes = {
  media: PopularType;
  currentMedia: CombinedMediaDetailsTypes;
};
