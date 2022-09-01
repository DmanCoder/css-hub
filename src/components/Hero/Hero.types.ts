import { PopularType } from '../../redux/actions/popularActions/popularActions.types';
import { MediaDetailsTypes, NetworkIdTypes } from '../../typescriptGlobals/types';

export type CalculateDescriptionParamsTypes = {
  description: string;
  width: number;
};

export type CalculateDescriptionReturnTypes = {
  description: string;
};

export type ReturnNetworkNamesParamsTypes = {
  media: PopularType;
  currentMedia: MediaDetailsTypes;
  networkId: NetworkIdTypes;
};

export interface IHeroProps {}

export type UseHeroReturnType = {
  networkId: NetworkIdTypes;
  streams: PopularType[];
  indexPosition: number;
  description: string;
  currentMedia: MediaDetailsTypes;
  networkName: string;
  contentRating: string;
  contentDuration: string;
  backdropImage: string;
};

export type ContentRatingsParams = {
  currentMedia: MediaDetailsTypes;
};

export type ContentDurationParamTypes = {
  media: PopularType;
  currentMedia: MediaDetailsTypes;
};
